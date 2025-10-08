import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation to user
    
    // For now, we'll just log the contact form submission
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    })

    // Optional: Use ZAI to generate a personalized response
    try {
      const zai = await ZAI.create()
      
      const response = await zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a professional assistant for a MERN Stack developer. Generate a brief, professional thank you message for someone who submitted a contact form.'
          },
          {
            role: 'user',
            content: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nGenerate a professional thank you response.`
          }
        ],
        max_tokens: 150,
        temperature: 0.7
      })

      const aiResponse = response.choices[0]?.message?.content

      return NextResponse.json({
        success: true,
        message: 'Thank you for your message! I\'ll get back to you soon.',
        aiResponse: aiResponse || 'Thank you for reaching out!'
      })
    } catch (aiError) {
      console.error('AI response generation failed:', aiError)
      
      return NextResponse.json({
        success: true,
        message: 'Thank you for your message! I\'ll get back to you soon.'
      })
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
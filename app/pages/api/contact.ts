import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' })
    }

    try {
      // 1. Log to the console
      console.log('Contact Form Submission:', { name, email, message })

      // 3. Send email using Nodemailer
      await sendEmail(name, email, message)

      return res.status(200).json({ success: true })
    } catch (error) {
      console.error('Error processing contact form:', error)
      return res.status(500).json({ error: 'Something went wrong. Please try again.' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}


// Function to send email using Nodemailer
async function sendEmail(name: string, email: string, message: string) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: 'your-email@example.com', // Replace with your email
    subject: 'New Contact Form Submission',
    text: message,
  })

  console.log('Email sent successfully!')
}

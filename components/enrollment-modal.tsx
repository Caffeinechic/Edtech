'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { X, CheckCircle, AlertCircle } from 'lucide-react'

interface EnrollmentStep {
  id: number
  title: string
  description: string
}

const steps: EnrollmentStep[] = [
  { id: 1, title: 'Course Selection', description: 'You&apos;ve selected the course' },
  { id: 2, title: 'Personal Information', description: 'Enter your details' },
  { id: 3, title: 'Documents & Payment', description: 'Complete submission' },
  { id: 4, title: 'Confirmation', description: 'All set!' },
]

interface EnrollmentModalProps {
  courseId: number
  courseName: string
  coursePrice: number
  onClose: () => void
  onSuccess: () => void
}

export default function EnrollmentModal({
  courseId,
  courseName,
  coursePrice,
  onClose,
  onSuccess,
}: EnrollmentModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    education: '',
  })
  const [enrollmentStatus, setEnrollmentStatus] = useState('draft')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
      if (currentStep === 2) {
        // Validate form data
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
          alert('Please fill in all required fields')
          return
        }
      }
      setCurrentStep(currentStep + 1)
      if (currentStep === 2) {
        setEnrollmentStatus('submitted')
      }
    }
  }

  const handleSubmit = () => {
    setEnrollmentStatus('payment_pending')
    setTimeout(() => {
      setEnrollmentStatus('enrolled')
      setTimeout(onSuccess, 1500)
    }, 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-card z-10">
          <h2 className="text-2xl font-bold text-foreground">Enroll in Course</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Progress steps */}
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold mb-2 transition-colors ${
                      currentStep >= step.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground/60'
                    }`}
                  >
                    {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : step.id}
                  </div>
                  <p className="text-xs font-medium text-foreground/70 text-center">{step.title}</p>
                </div>
              ))}
            </div>
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Step content */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Course Enrollment</h3>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p>Course: <span className="font-medium text-foreground">{courseName}</span></p>
                  <p>Duration: <span className="font-medium text-foreground">25 Hours</span></p>
                  <p>Price: <span className="font-medium text-foreground">${coursePrice}</span></p>
                  <p>Certificate: <span className="font-medium text-foreground">Industry-Recognized</span></p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">
                  Once you enroll, you&apos;ll have access to all course materials. Your enrollment status will be updated shortly.
                </p>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Current Education Level</label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-input rounded-lg text-foreground bg-background"
                >
                  <option value="">Select...</option>
                  <option value="school">School Student</option>
                  <option value="college">College Student</option>
                  <option value="graduate">Graduate/Postgraduate</option>
                  <option value="working">Working Professional</option>
                </select>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-green-900">Personal Information Submitted</h3>
                </div>
                <p className="text-sm text-green-800">Your details have been saved successfully.</p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h3 className="font-semibold text-amber-900 mb-3">Payment Required</h3>
                <div className="space-y-2 text-sm text-amber-800 mb-4">
                  <div className="flex justify-between">
                    <span>Course Fee:</span>
                    <span className="font-medium">${coursePrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (10%):</span>
                    <span className="font-medium">${Math.round(coursePrice * 0.1)}</span>
                  </div>
                  <div className="border-t border-amber-200 pt-2 flex justify-between font-semibold">
                    <span>Total Amount:</span>
                    <span>${Math.round(coursePrice * 1.1)}</span>
                  </div>
                </div>
                <p className="text-xs text-amber-700">
                  Click the button below to complete the payment and finalize your enrollment.
                </p>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="text-center space-y-4 py-8">
              {enrollmentStatus === 'enrolled' ? (
                <>
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Enrollment Confirmed!</h3>
                  <p className="text-foreground/70">
                    Welcome to {courseName}! You&apos;re now enrolled and can access all course materials.
                  </p>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-left text-sm">
                    <p className="font-medium text-foreground mb-2">Next Steps:</p>
                    <ul className="space-y-1 text-foreground/70">
                      <li>• Check your email for course access details</li>
                      <li>• Access the course dashboard</li>
                      <li>• Start learning at your own pace</li>
                    </ul>
                  </div>
                </>
              ) : (
                <div className="py-4">
                  <div className="inline-block px-4 py-2 bg-muted rounded-full mb-4">
                    <p className="text-sm font-medium text-foreground">Processing your enrollment...</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-3 mt-8 pt-6 border-t border-border">
            {currentStep > 1 && (
              <Button
                variant="outline"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex-1"
              >
                Previous
              </Button>
            )}

            {currentStep < 4 ? (
              <Button
                onClick={currentStep === 3 ? handleSubmit : handleNext}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                {currentStep === 3 ? 'Complete Payment' : 'Next'}
              </Button>
            ) : (
              <Button
                onClick={onClose}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Go to Dashboard
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}

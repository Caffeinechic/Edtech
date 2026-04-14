'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  X, CheckCircle, AlertCircle, User, 
  Mail, Phone, GraduationCap, UploadCloud, 
  CreditCard, ShieldCheck, ArrowRight, Loader2
} from 'lucide-react'

interface EnrollmentStep {
  id: number
  title: string
}

const steps: EnrollmentStep[] = [
  { id: 1, title: 'Identity' },
  { id: 2, title: 'Verification' },
  { id: 3, title: 'Payment' },
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
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    education: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (currentStep < 3) {
      if (currentStep === 1) {
        if (!formData.firstName || !formData.lastName || !formData.email) return
      }
      setCurrentStep(currentStep + 1)
    } else {
      handleFinalize()
    }
  }

  const handleFinalize = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      onSuccess()
    }, 2500)
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <Card className="w-full max-w-xl border-border/50 premium-shadow bg-card rounded-3xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Section */}
        <div className="p-8 border-b border-border/50 flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-black tracking-tight">Enrollment <span className="text-primary italic">Portal</span></h2>
            <p className="text-sm font-medium text-muted-foreground">{courseName}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-secondary">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Progress Bar Area */}
        <div className="px-8 pt-8 pb-4">
          <div className="flex justify-between mb-3">
             {steps.map(step => (
               <div key={step.id} className="flex flex-col items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    currentStep >= step.id ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-110' : 'bg-secondary text-muted-foreground'
                  }`}>
                    {currentStep > step.id ? <CheckCircle className="w-4 h-4" /> : step.id}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${currentStep >= step.id ? 'text-primary' : 'text-muted-foreground'}`}>
                    {step.title}
                  </span>
               </div>
             ))}
          </div>
          <Progress value={(currentStep / steps.length) * 100} className="h-1 bg-secondary" />
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto p-8">
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">First Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleInputChange} 
                        className="pl-10 h-12 rounded-xl bg-secondary/50 border-border/50 focus:bg-background transition-colors" 
                        placeholder="e.g. Liam"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Last Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleInputChange} 
                        className="pl-10 h-12 rounded-xl bg-secondary/50 border-border/50 focus:bg-background transition-colors" 
                        placeholder="e.g. Miller"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      className="pl-10 h-12 rounded-xl bg-secondary/50 border-border/50 focus:bg-background transition-colors" 
                      placeholder="e.g. liam@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      className="pl-10 h-12 rounded-xl bg-secondary/50 border-border/50 focus:bg-background transition-colors" 
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl border border-dashed border-primary/30 bg-primary/5 flex flex-col items-center justify-center text-center space-y-4 hover:bg-primary/10 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Upload Student ID / Certificate</h4>
                    <p className="text-xs text-muted-foreground mt-1">Drag and drop or click to upload (PDF, PNG, JPG)</p>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-lg h-9 font-bold bg-white">Select File</Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-secondary/30">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <div className="flex-grow">
                      <p className="text-xs font-bold text-muted-foreground uppercase">Highest Education</p>
                      <select 
                        name="education" 
                        value={formData.education} 
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-none p-0 text-sm font-bold focus:ring-0 cursor-pointer"
                      >
                        <option value="">Select Level...</option>
                        <option value="school">High School</option>
                        <option value="college">Undergraduate</option>
                        <option value="graduate">Postgraduate</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-muted-foreground">Original Price</span>
                      <span className="text-sm font-bold line-through">$499.00</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-muted-foreground">Scholarship Discount</span>
                      <span className="text-sm font-bold text-emerald-500">-$200.00</span>
                   </div>
                   <div className="pt-4 border-t border-border/50 flex justify-between items-center">
                      <span className="text-lg font-black italic">Total Payable</span>
                      <span className="text-2xl font-black text-primary">${coursePrice}.00</span>
                   </div>
                </div>

                <div className="p-5 rounded-2xl border border-border/50 bg-card flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-500 uppercase">Secure Payment</p>
                    <p className="text-xs text-muted-foreground">Encrypted processing via Stripe</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-8 border-t border-border/50 bg-secondary/10 flex items-center gap-4">
          {currentStep > 1 && (
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep(currentStep - 1)} 
              className="h-14 flex-1 rounded-2xl font-bold bg-white"
            >
              Back
            </Button>
          )}
          <Button 
            onClick={handleNext} 
            disabled={isProcessing}
            className="h-14 flex-[2] rounded-2xl font-black text-lg bg-primary shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                {currentStep === 3 ? 'Finalize Payment' : 'Continue'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
        </div>
      </Card>
    </div>
  )
}

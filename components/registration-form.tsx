"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function RegistrationForm() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    organization: "",
    interests: [] as string[],
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const interestOptions = [
    { id: "talks", label: "Talks" },
    { id: "competitions", label: "Competitions" },
    { id: "workshops", label: "Workshops" },
    { id: "all", label: "All of Them" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target

    setFormState((prev) => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, value] }
      } else {
        return { ...prev, interests: prev.interests.filter((interest) => interest !== value) }
      }
    })

    // Clear error when user selects
    if (errors.interests) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.interests
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formState.organization.trim()) {
      newErrors.organization = "Organization is required"
    }

    if (formState.interests.length === 0) {
      newErrors.interests = "Please select at least one interest"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real app, you would submit the form data to your backend here
      console.log("Form submitted:", formState)
      setSubmitted(true)
    }
  }

  return (
    <section id="register" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Join the Space Celebration!</h2>
            <p className="text-muted-foreground text-lg">Register now to secure your spot at Spaceweek 2025.</p>
          </div>

          {submitted ? (
            <motion.div
              className="glassmorphism rounded-xl p-8 text-center border border-space-600/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-space-600/20 mb-4">
                <Check className="h-8 w-8 text-space-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Registration Successful!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for registering for Spaceweek 2025. We've sent a confirmation email to {formState.email}.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setFormState({
                    fullName: "",
                    email: "",
                    organization: "",
                    interests: [],
                  })
                }}
                className="text-space-400 hover:text-space-300 font-medium transition-colors"
              >
                Register another person
              </button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="glassmorphism rounded-xl p-6 md:p-8 border border-space-800/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formState.fullName}
                    onChange={handleInputChange}
                    className={`form-input ${errors.fullName ? "border-red-500" : ""}`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className={`form-input ${errors.email ? "border-red-500" : ""}`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="organization" className="form-label">
                    College/Organization Name
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formState.organization}
                    onChange={handleInputChange}
                    className={`form-input ${errors.organization ? "border-red-500" : ""}`}
                    placeholder="Enter your college or organization"
                  />
                  {errors.organization && <p className="mt-1 text-sm text-red-500">{errors.organization}</p>}
                </div>

                <div>
                  <p className={`form-label mb-2 ${errors.interests ? "text-red-500" : ""}`}>Select Your Interests</p>
                  <div className="space-y-2">
                    {interestOptions.map((option) => (
                      <div key={option.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={option.id}
                          name="interests"
                          value={option.id}
                          checked={formState.interests.includes(option.id)}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 rounded border-gray-300 text-space-600 focus:ring-space-500"
                        />
                        <label htmlFor={option.id} className="ml-2 text-sm text-foreground">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.interests && <p className="mt-1 text-sm text-red-500">{errors.interests}</p>}
                </div>

                <div className="pt-4">
                  <button type="submit" className="form-submit w-full">
                    Submit Registration
                  </button>
                </div>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}


"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ExternalLink, 
  Eye, 
  MailPlus, 
  MapPin, 
  Building2, 
  Bookmark,
  CheckCircle
} from "lucide-react"

const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Product+Sans:wght@400;700&display=swap');
  
  :root {
    --bg: #2B2B2B;
    --bone: #F4F1E9;
    --zinc-dark: #1A1A1A;
  }

  body { 
    font-family: 'Product Sans', sans-serif; 
    background-color: var(--bg);
    color: var(--bone);
    letter-spacing: 0 !important;
    line-height: 1 !important;
    text-transform: none !important;
  }

  h1, h2, h3, p, span, button, label, div {
    letter-spacing: 0 !important;
    line-height: 1 !important;
    text-transform: none !important;
  }
`

const RoughLogo = () => (
  <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9575.23 3255.58" className="h-8 w-auto">
    <path fill="#F4F1E9" d="M5362.13,383.01v957.52c0,152.09-60.13,295.98-169.33,405.18-109.2,109.2-253.09,169.33-405.18,169.33s-295.98-60.13-405.18-169.33c-109.2-109.2-169.33-253.09-169.33-405.18V383.01h-383.01v957.52c0,527.98,429.55,957.52,957.52,957.52s957.52-429.55,957.52-957.52V383.01h-383.01Z"/>
    <path fill="#F4F1E9" d="M957.52,383.01C429.54,383.01,0,812.55,0,1340.53v957.52h383.01v-957.52c0-152.09,60.13-295.98,169.33-405.18,109.2-109.2,253.09-169.33,405.18-169.33s295.98,60.13,405.18,169.33c109.2,109.2,169.33,253.09,169.33,405.18h383.01c0-527.98-429.55-957.52-957.52-957.52"/>
    <path fill="#F4F1E9" d="M2872.57,383.01c-527.98,0-957.52,429.54-957.52,957.52s429.55,957.52,957.52,957.52,957.52-429.54,957.52-957.52-429.54-957.52-957.52-957.52M3277.75,1745.71c-109.2,109.2-253.09,169.33-405.18,169.33s-295.98-60.13-405.18-169.33c-109.2-109.2-169.33-253.09-169.33-405.18s60.13-295.98,169.33-405.18c109.2-109.2,253.09-169.33,405.18-169.33s295.98,60.13,405.18,169.33c109.2,109.2,169.33,253.09,169.33,405.18s-60.13,295.98-169.33,405.18"/>
    <path fill="#F4F1E9" d="M8617.71,383.01c-215.38,0-414.37,71.51-574.51,191.99V0h-383.01v2298.06h383.01v-957.52c0-152.09,60.13-295.98,169.33-405.18,109.2-109.2,253.09-169.33,405.18-169.33s295.98,60.13,405.18,169.33c109.2,109.2,169.33,253.09,169.33,405.18v957.52h383.01v-957.52c0-527.98-429.54-957.52-957.52-957.52"/>
    <path fill="#F4F1E9" d="M6702.66,383.01c-527.98,0-957.52,429.54-957.52,957.52s429.54,957.52,957.52,957.52,957.52-429.54,957.52-957.52-429.54-957.52-957.52-957.52M7107.84,1745.71c-109.2,109.2-253.1,169.33-405.18,169.33s-295.98-60.13-405.18-169.33c-109.2-109.2-169.33-253.09-169.33-405.18s60.13-295.98,169.33-405.18c109.2-109.2,253.09-169.33,405.18-169.33s295.98,60.13,405.18,169.33c109.2,109.2,169.33,253.09,169.33,405.18s-60.13,295.98-169.33,405.18"/>
    <path fill="#F4F1E9" d="M7107.84,2703.24c-109.2,109.2-253.1,169.33-405.18,169.33s-295.98-60.13-405.18-169.33c-109.2-109.2-169.33-253.09-169.33-405.18h-383.01c0,527.98,429.54,957.52,957.52,957.52s957.52-429.54,957.52-957.52h-383.01c0,152.09-60.13,295.98-169.33,405.18"/>
  </svg>
)

export default function Home() {
  const [draftedLeads, setDraftedLeads] = useState<string[]>([])
  const [savedLeads, setSavedLeads] = useState<string[]>([])
  const [previewLead, setPreviewLead] = useState<string | null>(null)

  const leads = [
    {
      id: "25/06037/FUL",
      address: "544 Gorgie Road, Edinburgh",
      title: "Change of use to restaurant (Class 3)",
      applicant: "Mr Ahmed Ali",
      intel: "Owns Pepe's Piri Piri next door. News confirms new restaurant at this spot.",
      draft: "Hi Ahmed, saw the plans for 544 Gorgie Road next to your Pepe's unit. Smart spot. If you need the interior to match the ambition (and get the license through), Rough specializes in this...",
      portalUrl: "https://citydev-portal.edinburgh.gov.uk/idoxpa-web/applicationDetails.do?activeTab=summary&keyVal=2506037FUL",
    }
  ]

  const handleCreateDraft = async (id: string) => {
    setDraftedLeads([...draftedLeads, id])
    setPreviewLead(null)
  }

  return (
    <main className="min-h-screen bg-[#2B2B2B] text-[#F4F1E9] antialiased pb-20">
      <style dangerouslySetInnerHTML={{ __html: fontStyle }} />
      
      <div className="max-w-2xl mx-auto py-20 px-6 space-y-16">
        
        {/* HEADER */}
        <div className="space-y-6">
          <RoughLogo />
          <h1 className="text-3xl font-bold">Planning sniper</h1>
        </div>

        {/* LEAD LIST */}
        <div className="space-y-12">
          {leads.map((lead) => (
            <div key={lead.id} className="space-y-8">
              
              {/* LEAD INFO */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-500 font-medium">{lead.id}</span>
                  {draftedLeads.includes(lead.id) && (
                    <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> In drafts
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-bold leading-none">{lead.title}</h2>
              </div>

              {/* DETAILS BOX */}
              <div className="grid grid-cols-2 gap-10">
                <div className="space-y-2">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium">{lead.address}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Applicant</p>
                  <p className="text-sm font-medium">{lead.applicant}</p>
                </div>
              </div>

              {/* INTEL */}
              <div className="space-y-2">
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Sniper intelligence</p>
                <p className="text-sm leading-normal text-zinc-300">{lead.intel}</p>
              </div>

              {/* ACTION BAR */}
              <div className="flex gap-2 pt-2">
                <Button 
                  onClick={() => setPreviewLead(previewLead === lead.id ? null : lead.id)}
                  className="bg-[#F4F1E9] text-[#2B2B2B] hover:bg-[#F4F1E9]/90 font-bold h-10 px-6 rounded-none text-sm"
                >
                  {previewLead === lead.id ? "Hide draft" : "Inspect draft"}
                </Button>
                
                <Button 
                  onClick={() => handleCreateDraft(lead.id)}
                  disabled={draftedLeads.includes(lead.id)}
                  className="bg-transparent border border-zinc-700 text-[#F4F1E9] hover:bg-zinc-800 font-bold h-10 px-6 rounded-none text-sm disabled:opacity-30"
                >
                  Draft in gmail
                </Button>

                <div className="flex-1" />

                <Button 
                  variant="ghost" 
                  onClick={() => setSavedLeads(prev => prev.includes(lead.id) ? prev.filter(i => i !== lead.id) : [...prev, lead.id])}
                  className={`h-10 w-10 p-0 rounded-none hover:bg-zinc-800 transition-all ${savedLeads.includes(lead.id) ? 'text-[#F4F1E9]' : 'text-zinc-600'}`}
                >
                  <Bookmark className={`h-4 w-4 ${savedLeads.includes(lead.id) ? 'fill-current' : ''}`} />
                </Button>

                <a href={lead.portalUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="h-10 w-10 p-0 rounded-none hover:bg-zinc-800 text-zinc-500">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>

              {/* PREVIEW BOX */}
              {previewLead === lead.id && (
                <div className="p-8 bg-zinc-900 border border-zinc-800 space-y-6">
                  <p className="text-sm leading-relaxed text-[#F4F1E9]">{lead.draft}</p>
                  <Button 
                    onClick={() => handleCreateDraft(lead.id)}
                    className="bg-[#F4F1E9] text-[#2B2B2B] hover:bg-[#F4F1E9]/90 font-bold h-10 px-6 rounded-none text-sm"
                  >
                    Confirm and draft
                  </Button>
                </div>
              )}

              <div className="border-b border-zinc-800 pt-8" />
            </div>
          ))}
        </div>
        
        <p className="text-[10px] font-bold text-zinc-700 select-none pt-10">
          Built for rough by the terry
        </p>
      </div>
    </main>
  )
}

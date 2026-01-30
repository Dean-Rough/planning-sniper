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
  CheckCircle,
  Copy
} from "lucide-react"

const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Product+Sans:wght@400;700&display=swap');
  
  :root {
    --bg: #2B2B2B;
    --bone: #F4F1E9;
    --zinc-muted: #A1A1AA;
  }

  body { 
    font-family: 'Product Sans', sans-serif; 
    background-color: var(--bg);
    color: var(--bone);
    letter-spacing: 0 !important;
    line-height: 1.2 !important;
  }

  h1, h2, h3, p, span, button, label, div {
    letter-spacing: 0 !important;
    text-transform: none !important;
  }

  .bone-text { color: var(--bone); }
  .muted-text { color: var(--zinc-muted); }
`

const RoughLogo = () => (
  <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9575.23 3255.58" className="h-7 w-auto">
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
      council: "Edinburgh",
      address: "544 Gorgie Road, Edinburgh",
      title: "Change of use to restaurant (Class 3)",
      applicant: "Mr Ahmed Ali",
      intel: "Owns Pepe's Piri Piri next door. News confirms new restaurant at this spot.",
      draft: "Hi Ahmed, saw the plans for 544 Gorgie Road next to your Pepe's unit. Smart spot. If you need the interior to match the ambition (and get the license through), Rough specializes in this...",
      portalUrl: "https://citydev-portal.edinburgh.gov.uk/idoxpa-web/applicationDetails.do?activeTab=summary&keyVal=2506037FUL",
    }
  ]

  const [copied, setCopied] = useState(false)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCreateDraft = async (lead: any) => {
    try {
      const response = await fetch('/api/draft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'ahmed@example.com', // In real use, this comes from the scraper intel
          subject: `Planning Application: ${lead.id} - ${lead.address}`,
          body: lead.draft
        })
      });

      if (!response.ok) throw new Error('Failed to create draft');

      setDraftedLeads([...draftedLeads, lead.id])
      setPreviewLead(null)
    } catch (error) {
      console.error('Draft error:', error);
      alert('Failed to create draft in Gmail. Check console.');
    }
  }

  return (
    <main className="min-h-screen bg-[#2B2B2B] text-[#F4F1E9] antialiased pb-20 font-normal">
      <style dangerouslySetInnerHTML={{ __html: fontStyle }} />
      
      <div className="max-w-2xl mx-auto py-20 px-6 space-y-16">
        
        {/* HEADER */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <RoughLogo />
            <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900/30 border border-zinc-700/50 rounded-full text-[10px] uppercase tracking-widest font-bold text-zinc-500">
              <span className="relative flex h-1.5 w-1.5 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84894A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#84894A]"></span>
              </span>
              Sniper live
            </div>
          </div>
          <div className="space-y-3 border-l-2 border-white pl-6 py-1">
            <h1 className="text-3xl font-bold tracking-tight leading-none">Planning sniper</h1>
            <p className="text-zinc-500 text-sm font-medium tracking-normal leading-relaxed max-w-sm">Automated high-intent outreach for Rough Design.</p>
          </div>
        </div>

        {/* LEAD LIST */}
        <div className="space-y-16">
          {leads.map((lead) => (
            <div key={lead.id} className="space-y-10 group border border-[#F4F1E9] p-10 -m-10">
              
              {/* LEAD INFO */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-zinc-600 font-bold tracking-wider">{lead.id}</span>
                  <span className="text-[10px] text-[#84894A] font-bold uppercase tracking-widest bg-[#84894A]/5 px-2 py-0.5 border border-[#84894A]/10">
                    {lead.council}
                  </span>
                  {draftedLeads.includes(lead.id) && (
                    <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1.5 bg-emerald-400/5 px-2 py-0.5 border border-emerald-400/10">
                      <CheckCircle className="w-3 h-3" /> In drafts
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-bold leading-tight tracking-tight pr-10">{lead.title}</h2>
              </div>

              {/* DETAILS BOX */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Location</p>
                  <p className="text-[15px] font-bold text-[#F4F1E9]">{lead.address}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Applicant</p>
                  <p className="text-[15px] font-bold text-[#F4F1E9]">{lead.applicant}</p>
                </div>
                <div className="col-span-2 space-y-2 pt-2">
                  <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Sniper intelligence</p>
                  <p className="text-[15px] font-bold text-[#F4F1E9]">{lead.intel}</p>
                </div>
              </div>

              {/* ACTION BAR */}
              <div className="flex items-center gap-3 pt-6 border-t border-zinc-800/50">
                <Button 
                  onClick={() => setPreviewLead(previewLead === lead.id ? null : lead.id)}
                  className="bg-[#F4F1E9] text-[#2B2B2B] hover:bg-white font-bold h-11 px-8 rounded-none text-[13px] transition-all"
                >
                  {previewLead === lead.id ? "Hide draft" : "Inspect draft"}
                </Button>
                
                <Button 
                  onClick={() => handleCreateDraft(lead)}
                  disabled={draftedLeads.includes(lead.id)}
                  className="bg-transparent border border-zinc-700 text-[#F4F1E9] hover:bg-zinc-800 font-bold h-11 px-8 rounded-none text-[13px] transition-all disabled:opacity-20"
                >
                  Draft in gmail
                </Button>

                <div className="flex-1" />

                <div className="flex items-center gap-1">
                  <Button 
                    variant="ghost" 
                    onClick={() => setSavedLeads(prev => prev.includes(lead.id) ? prev.filter(i => i !== lead.id) : [...prev, lead.id])}
                    className={`h-11 w-11 p-0 rounded-none hover:bg-zinc-800/50 transition-all ${savedLeads.includes(lead.id) ? 'text-[#F4F1E9]' : 'text-zinc-600'}`}
                  >
                    <Bookmark className={`h-4 w-4 ${savedLeads.includes(lead.id) ? 'fill-current' : ''}`} />
                  </Button>

                  <a href={lead.portalUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" className="h-11 w-11 p-0 rounded-none hover:bg-zinc-800/50 text-zinc-600">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* PREVIEW BOX */}
              {previewLead === lead.id && (
                <div className="p-10 bg-[#1A1A1A] border border-zinc-800 space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="space-y-1">
                    <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Email draft</p>
                    <p className="text-lg leading-relaxed text-[#F4F1E9] font-bold">{lead.draft}</p>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <Button 
                      onClick={() => handleCopy(lead.draft)}
                      variant="outline"
                      className="border-zinc-700 text-[#F4F1E9] hover:bg-zinc-800 rounded-none font-bold text-xs uppercase tracking-widest px-6 h-11"
                    >
                      <Copy className="w-4 h-4 mr-2" /> {copied ? 'Copied' : 'Copy'}
                    </Button>
                    <Button 
                      onClick={() => handleCreateDraft(lead)}
                      className="bg-[#F4F1E9] text-[#2B2B2B] hover:bg-white font-bold h-11 px-8 rounded-none text-[13px] transition-all"
                    >
                      Confirm and draft
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <p className="text-[10px] font-bold text-zinc-800 select-none pt-20 text-center tracking-widest uppercase opacity-40">
          Built for rough by the terry
        </p>
      </div>
    </main>
  )
}

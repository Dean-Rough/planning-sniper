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
  Search,
  Bookmark,
  CheckCircle
} from "lucide-react"

const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Product+Sans:wght@400;700&display=swap');
  body { 
    font-family: 'Product Sans', sans-serif; 
    background-color: #2B2B2B;
    color: #F4F1E9;
  }
  .rough-text { color: #F4F1E9; }
  .rough-bg { background-color: #2B2B2B; }
  .rough-accent-orange { color: #EC753D; }
  .rough-accent-green { color: #84894A; }
  .rough-accent-pink { color: #E7C9C9; }
`

const RoughLogo = () => (
  <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9575.23 3255.58" className="h-10 w-auto">
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
    <main className="min-h-screen bg-[#2B2B2B] text-[#F4F1E9] antialiased">
      <style dangerouslySetInnerHTML={{ __html: fontStyle }} />
      
      <div className="max-w-3xl mx-auto py-16 px-6 space-y-16">
        
        {/* ROUGH BRANDING HEADER */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <RoughLogo />
            <div className="flex items-center gap-2 px-4 py-1.5 bg-[#121212]/30 border border-zinc-700 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
              <span className="relative flex h-2 w-2 mr-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84894A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#84894A]"></span>
              </span>
              Sniper Live
            </div>
          </div>
          <div className="space-y-3 border-l-2 border-[#F4F1E9] pl-6 py-1">
            <h1 className="text-4xl font-bold uppercase tracking-tight leading-none">Planning Sniper</h1>
            <p className="text-zinc-500 text-sm font-medium tracking-wide">Automated high-intent outreach for Rough Design.</p>
          </div>
        </div>

        {/* LEAD LIST */}
        <div className="space-y-10">
          {leads.map((lead) => (
            <Card key={lead.id} className="bg-[#121212]/20 border-zinc-800 rounded-2xl overflow-hidden transition-all hover:border-zinc-700">
              <CardHeader className="border-b border-zinc-800/50 pb-6 px-8 pt-8">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-[10px] font-bold text-zinc-500 border-zinc-800 px-2 py-0.5 rounded-md uppercase tracking-wider">
                        {lead.id}
                      </Badge>
                      {draftedLeads.includes(lead.id) && (
                        <Badge className="bg-[#84894A]/10 text-[#84894A] border-[#84894A]/20 rounded-md text-[9px] uppercase font-bold tracking-widest px-2">
                          <CheckCircle className="w-3 h-3 mr-1" /> In Drafts
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl font-bold leading-tight">{lead.title}</CardTitle>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => setSavedLeads(prev => prev.includes(lead.id) ? prev.filter(i => i !== lead.id) : [...prev, lead.id])}
                      className={`h-10 w-10 border-zinc-800 bg-[#2B2B2B]/50 hover:bg-[#F4F1E9] hover:text-[#2B2B2B] transition-all ${savedLeads.includes(lead.id) ? 'bg-[#F4F1E9] text-[#2B2B2B] border-[#F4F1E9]' : ''}`}
                    >
                      <Bookmark className={`h-4 w-4 ${savedLeads.includes(lead.id) ? 'fill-current' : ''}`} />
                    </Button>
                    <a href={lead.portalUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="h-10 border-zinc-800 bg-[#2B2B2B]/50 hover:bg-[#F4F1E9] hover:text-[#2B2B2B] font-bold text-xs tracking-wide">
                        <ExternalLink className="w-4 h-4 mr-2" /> PORTAL
                      </Button>
                    </a>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8 space-y-8">
                <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Location</label>
                    <p className="text-base font-medium flex items-center gap-2.5 text-[#F4F1E9]">
                      <MapPin className="w-4 h-4 text-[#84894A]" /> {lead.address}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Applicant</label>
                    <p className="text-base font-medium flex items-center gap-2.5 text-[#F4F1E9]">
                      <Building2 className="w-4 h-4 text-[#84894A]" /> {lead.applicant}
                    </p>
                  </div>
                </div>

                <div className="bg-[#2B2B2B]/40 p-5 rounded-xl border border-zinc-800/50 shadow-inner">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] block mb-3">Sniper Intelligence</label>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">
                    {lead.intel}
                  </p>
                </div>

                {previewLead === lead.id && (
                  <div className="animate-in fade-in slide-in-from-top-4 duration-500 bg-[#F4F1E9] text-[#2B2B2B] p-6 rounded-xl shadow-2xl space-y-4">
                    <div className="flex justify-between items-center border-b border-zinc-200 pb-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Draft Email</label>
                      <Badge variant="outline" className="border-zinc-300 text-[9px] font-bold uppercase text-[#2B2B2B]">Rough Signature Included</Badge>
                    </div>
                    <p className="text-base font-bold leading-relaxed pr-4">
                      {lead.draft}
                    </p>
                    <div className="pt-4 flex justify-end">
                      <Button 
                        onClick={() => handleCreateDraft(lead.id)}
                        className="bg-[#2B2B2B] text-[#F4F1E9] hover:bg-zinc-800 rounded-lg font-bold text-xs uppercase tracking-widest px-8 h-12"
                      >
                        <MailPlus className="w-4 h-4 mr-2" /> ADD TO GMAIL DRAFTS
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="bg-[#121212]/40 border-t border-zinc-800 p-0 overflow-hidden">
                <div className="grid grid-cols-2 w-full">
                  <button 
                    onClick={() => setPreviewLead(previewLead === lead.id ? null : lead.id)}
                    className="flex items-center justify-center gap-3 py-6 text-xs font-bold uppercase tracking-widest hover:bg-[#F4F1E9] hover:text-[#2B2B2B] transition-all border-r border-zinc-800 text-zinc-400"
                  >
                    <Eye className="w-4 h-4 text-[#EC753D]" /> {previewLead === lead.id ? "Hide Draft" : "Inspect Draft"}
                  </button>
                  <button 
                    disabled={draftedLeads.includes(lead.id)}
                    onClick={() => handleCreateDraft(lead.id)}
                    className="flex items-center justify-center gap-3 py-6 text-xs font-bold uppercase tracking-widest bg-[#E7C9C9] text-[#2B2B2B] hover:bg-[#F4F1E9] transition-all disabled:bg-zinc-900 disabled:text-zinc-600"
                  >
                    <MailPlus className="w-4 h-4" /> {draftedLeads.includes(lead.id) ? "Draft Created" : "Draft in Gmail"}
                  </button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-700 select-none">
            Built for Rough by The Terry
          </p>
        </div>
      </div>
    </main>
  )
}

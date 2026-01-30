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

// Google Sans font import via standard head injection in layout would be better, 
// but for the dashboard we can use it directly via Tailwind or a style tag here.
const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Product+Sans:wght@400;700&display=swap');
  body { font-family: 'Product Sans', sans-serif; }
`

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
    // In a real app, this hits a /api/drafts endpoint
    setDraftedLeads([...draftedLeads, id])
    setPreviewLead(null)
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#F5F5F5] antialiased">
      <style dangerouslySetInnerHTML={{ __html: fontStyle }} />
      
      <div className="max-w-3xl mx-auto py-16 px-6 space-y-16">
        
        {/* ROUGH BRANDING HEADER */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            {/* FULL LOGO PLACEHOLDER - Using a high-res SVG path or text-based logo for now */}
            <div className="text-white text-5xl font-bold tracking-tighter leading-none select-none">
              rough<span className="text-zinc-700">.</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
              <span className="relative flex h-2 w-2 mr-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Sniper Live
            </div>
          </div>
          <div className="space-y-1.5 border-l-2 border-white pl-6 py-1">
            <h1 className="text-4xl font-bold uppercase tracking-tight italic leading-none">Planning Sniper</h1>
            <p className="text-zinc-500 text-sm font-medium tracking-wide">Automated high-intent outreach for Rough Design.</p>
          </div>
        </div>

        {/* LEAD LIST */}
        <div className="space-y-10">
          {leads.map((lead) => (
            <Card key={lead.id} className="bg-[#121212] border-zinc-800 rounded-2xl overflow-hidden transition-all hover:border-zinc-700">
              <CardHeader className="border-b border-zinc-800/50 pb-6 px-8 pt-8">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-[10px] font-bold text-zinc-500 border-zinc-800 px-2 py-0.5 rounded-md uppercase tracking-wider">
                        {lead.id}
                      </Badge>
                      {draftedLeads.includes(lead.id) && (
                        <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 rounded-md text-[9px] uppercase font-bold tracking-widest px-2">
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
                      className={`h-10 w-10 border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black transition-all ${savedLeads.includes(lead.id) ? 'bg-white text-black border-white' : ''}`}
                    >
                      <Bookmark className={`h-4 w-4 ${savedLeads.includes(lead.id) ? 'fill-current' : ''}`} />
                    </Button>
                    <a href={lead.portalUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="h-10 border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black font-bold text-xs tracking-wide">
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
                    <p className="text-base font-medium flex items-center gap-2.5 text-zinc-200">
                      <MapPin className="w-4 h-4 text-zinc-500" /> {lead.address}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Applicant</label>
                    <p className="text-base font-medium flex items-center gap-2.5 text-zinc-200">
                      <Building2 className="w-4 h-4 text-zinc-500" /> {lead.applicant}
                    </p>
                  </div>
                </div>

                <div className="bg-[#181818] p-5 rounded-xl border border-zinc-800/50 shadow-inner">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] block mb-3">Sniper Intelligence</label>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed italic">
                    "{lead.intel}"
                  </p>
                </div>

                {previewLead === lead.id && (
                  <div className="animate-in fade-in slide-in-from-top-4 duration-500 bg-white text-black p-6 rounded-xl shadow-2xl space-y-4">
                    <div className="flex justify-between items-center border-b border-zinc-100 pb-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Draft Email</label>
                      <Badge variant="outline" className="border-zinc-200 text-[9px] font-bold uppercase">Rough Signature Included</Badge>
                    </div>
                    <p className="text-base font-bold leading-relaxed text-zinc-900 pr-4">
                      {lead.draft}
                    </p>
                    <div className="pt-4 flex justify-end">
                      <Button 
                        onClick={() => handleCreateDraft(lead.id)}
                        className="bg-black text-white hover:bg-zinc-800 rounded-lg font-bold text-xs uppercase tracking-widest px-8 h-12"
                      >
                        <MailPlus className="w-4 h-4 mr-2" /> ADD TO GMAIL DRAFTS
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="bg-[#181818]/50 border-t border-zinc-800 p-0 overflow-hidden">
                <div className="grid grid-cols-2 w-full">
                  <button 
                    onClick={() => setPreviewLead(previewLead === lead.id ? null : lead.id)}
                    className="flex items-center justify-center gap-3 py-6 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all border-r border-zinc-800 text-zinc-400"
                  >
                    <Eye className="w-4 h-4" /> {previewLead === lead.id ? "Hide Draft" : "Inspect Draft"}
                  </button>
                  <button 
                    disabled={draftedLeads.includes(lead.id)}
                    onClick={() => handleCreateDraft(lead.id)}
                    className="flex items-center justify-center gap-3 py-6 text-xs font-bold uppercase tracking-widest bg-white text-black hover:bg-zinc-200 transition-all disabled:bg-zinc-900 disabled:text-zinc-600"
                  >
                    <MailPlus className="w-4 h-4" /> {draftedLeads.includes(lead.id) ? "Draft Created" : "Draft in Gmail"}
                  </button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center pt-8">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700 select-none">
            Built for Rough by The Terry
          </p>
        </div>
      </div>
    </main>
  )
}

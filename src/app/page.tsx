"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ExternalLink, 
  Eye, 
  SendHorizontal, 
  MapPin, 
  Building2, 
  Search,
  CheckCircle2,
  Bookmark
} from "lucide-react"

export default function Home() {
  const [sentLeads, setSentLeads] = useState<string[]>([])
  const [savedLeads, setSavedLeads] = useState<string[]>([])
  const [previewLead, setPreviewLead] = useState<any>(null)

  const leads = [
    {
      id: "25/06037/FUL",
      address: "544 Gorgie Road, Edinburgh",
      title: "Change of use to restaurant (Class 3)",
      applicant: "Mr Ahmed Ali",
      intel: "Owns Pepe's Piri Piri next door. News confirms new restaurant at this spot.",
      draft: "Hi Ahmed, saw the plans for 544 Gorgie Road next to your Pepe's unit. Smart spot. If you need the interior to match the ambition (and get the license through), Rough specializes in this...",
      status: "New",
      portalUrl: "https://citydev-portal.edinburgh.gov.uk/idoxpa-web/applicationDetails.do?activeTab=summary&keyVal=2506037FUL",
    }
  ]

  const handleSend = (id: string) => {
    setSentLeads([...sentLeads, id])
    setPreviewLead(null)
  }

  const handleSave = (id: string) => {
    setSavedLeads([...savedLeads, id])
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <div className="max-w-3xl mx-auto py-12 px-6 space-y-12">
        
        {/* ROUGH BRANDING HEADER */}
        <div className="flex flex-col gap-4 border-b border-zinc-800 pb-10">
          <div className="flex items-center justify-between">
            <div className="bg-white text-black font-black text-4xl w-14 h-14 flex items-center justify-center tracking-tighter">
              R
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Monitoring Live
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-black uppercase tracking-tight italic">Planning Sniper</h1>
            <p className="text-zinc-500 text-sm font-medium">Hyper-targeted outreach for Rough Design.</p>
          </div>
        </div>

        {/* LEAD LIST */}
        <div className="space-y-8">
          {leads.map((lead) => (
            <Card key={lead.id} className="bg-zinc-950 border-zinc-800 rounded-none border-l-4 border-l-white overflow-hidden">
              <CardHeader className="border-b border-zinc-900 pb-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{lead.id}</span>
                      {sentLeads.includes(lead.id) && (
                        <Badge className="bg-green-500/10 text-green-500 border-green-500/20 rounded-none text-[9px] uppercase font-bold">
                          Sent
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold uppercase italic leading-none">{lead.title}</CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => handleSave(lead.id)}
                      className={`h-9 w-9 border-zinc-800 bg-transparent hover:bg-white hover:text-black transition-colors ${savedLeads.includes(lead.id) ? 'bg-white text-black' : ''}`}
                    >
                      <Bookmark className={`h-4 w-4 ${savedLeads.includes(lead.id) ? 'fill-current' : ''}`} />
                    </Button>
                    <a href={lead.portalUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="rounded-none border-zinc-800 bg-transparent hover:bg-white hover:text-black transition-colors h-9">
                        <ExternalLink className="w-4 h-4 mr-2" /> PORTAL
                      </Button>
                    </a>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="py-6 space-y-6">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em]">Location</label>
                    <p className="text-sm font-bold flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-zinc-500" /> {lead.address}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em]">Applicant</label>
                    <p className="text-sm font-bold flex items-center gap-2">
                      <Building2 className="w-3 h-3 text-zinc-500" /> {lead.applicant}
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-900 p-4 border-l-2 border-zinc-700">
                  <label className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em] block mb-2">Sniper Intel</label>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed italic">
                    "{lead.intel}"
                  </p>
                </div>

                {previewLead === lead.id && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-300 bg-white text-black p-4 space-y-3">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] opacity-50">Draft Message</label>
                    <p className="text-sm font-bold leading-relaxed underline decoration-zinc-300 underline-offset-4">
                      {lead.draft}
                    </p>
                    <div className="pt-2 flex justify-end">
                      <Button 
                        onClick={() => handleSend(lead.id)}
                        className="bg-black text-white hover:bg-zinc-800 rounded-none font-black text-[10px] uppercase tracking-widest px-6"
                      >
                        CONFIRM & SEND
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="bg-zinc-900/30 border-t border-zinc-900 p-0">
                <div className="grid grid-cols-2 w-full">
                  <button 
                    onClick={() => setPreviewLead(previewLead === lead.id ? null : lead.id)}
                    className="flex items-center justify-center gap-2 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors border-r border-zinc-900"
                  >
                    <Eye className="w-4 h-4" /> {previewLead === lead.id ? "Hide Preview" : "Preview Draft"}
                  </button>
                  <button 
                    disabled={sentLeads.includes(lead.id)}
                    className="flex items-center justify-center gap-2 py-4 text-[10px] font-black uppercase tracking-widest bg-white text-black hover:bg-zinc-200 transition-colors disabled:bg-zinc-800 disabled:text-zinc-500"
                  >
                    <SendHorizontal className="w-4 h-4" /> {sentLeads.includes(lead.id) ? "Message Sent" : "Send Sniper"}
                  </button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, MessageSquare, MapPin, Building2, Search } from "lucide-react"

export default function Home() {
  const leads = [
    {
      id: "25/06037/FUL",
      address: "544 Gorgie Road, Edinburgh",
      title: "Change of use to restaurant (Class 3)",
      applicant: "Mr Ahmed Ali",
      intel: "Owns Pepe's Piri Piri next door. News confirms new restaurant at this spot.",
      status: "New",
      portalUrl: "https://citydev-portal.edinburgh.gov.uk/idoxpa-web/applicationDetails.do?activeTab=summary&keyVal=2506037FUL",
    }
  ]

  return (
    <main className="min-h-screen bg-black text-zinc-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-xl leading-none">R</span>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">Planning Sniper</h1>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-400">
            <Search className="w-4 h-4" />
            <span>Monitoring Active</span>
          </div>
        </div>

        {/* Lead Grid */}
        <div className="grid gap-6">
          {leads.map((lead) => (
            <Card key={lead.id} className="bg-zinc-950 border-zinc-800 text-zinc-100">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-zinc-400 border-zinc-800">
                      {lead.id}
                    </Badge>
                    <Badge className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/10 border-orange-500/20">
                      High Priority
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold mt-2 leading-tight">
                    {lead.title}
                  </CardTitle>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-9 w-9 bg-zinc-900 border-zinc-800 hover:bg-zinc-800">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-zinc-500 flex items-center gap-2 uppercase tracking-widest text-[10px] font-bold">
                      <MapPin className="w-3 h-3" /> Location
                    </p>
                    <p className="font-medium">{lead.address}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-zinc-500 flex items-center gap-2 uppercase tracking-widest text-[10px] font-bold">
                      <Building2 className="w-3 h-3" /> Applicant
                    </p>
                    <p className="font-medium">{lead.applicant}</p>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 space-y-2">
                  <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">
                    The Sniper Intel
                  </p>
                  <p className="text-sm text-zinc-300 italic">
                    "{lead.intel}"
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex gap-3 pt-2">
                <Button className="flex-1 bg-white text-black hover:bg-zinc-200 font-bold">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Preview & Send
                </Button>
                <Button variant="outline" className="flex-1 border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300">
                  Link to Portal
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

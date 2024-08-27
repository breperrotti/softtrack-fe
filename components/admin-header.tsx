import { Input } from "./ui/input"


export const AdminHeader = () => {
  return (
    <header className="bg-muted/40 h-[3.75rem] border-b w-full">
        <div className="w-full h-full flex justify-between items-center p-6">
          <Input 
            className="min-w-6 max-w-144"
            placeholder="Pesquise por alguma coisa..."
          />
          <div>teste</div>
        </div>
    </header>
  )
}
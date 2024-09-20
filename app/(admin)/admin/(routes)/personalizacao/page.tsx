import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {ArrowRight, Construction} from "lucide-react";

const PersonalizacaoPage = () => {
    return (
        <div className={"flex items-center justify-center h-full"}>
            <div className={"flex flex-col gap-4 justify-center items-center -mt-24"}>
                <Construction size={100} stroke={"#5623E2"}/>
                <h1 className={"text-4xl font-bold"}>Esta página ainda está em Construção...</h1>
                <h2 className={"text-xl font-semibold text-gray-500"}>Fique atento as novidades e aos lançamentos que
                    estão por vir!</h2>
                <div className={"flex gap-x-2"}>
                    <Input
                        placeholder={"Receba um aviso..."}
                        type={"email"}
                    ></Input>
                    <Button
                        variant={"default"}
                    >
                        <ArrowRight/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PersonalizacaoPage;
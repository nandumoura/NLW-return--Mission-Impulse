import { Popover } from '@headlessui/react'
import {X } from "phosphor-react"

export function CloseButton(){
    return(
        <Popover.Button title="Fechar formulario de feedback" className="top-4 right-5 absolute text--zinc-400 hover:text-zinc-100">
            <X className='w-4 h-4' weight='bold' />
        </Popover.Button>
    )
}
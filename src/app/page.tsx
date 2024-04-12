'use client';
import { Header } from "@/proect/header";
import { UiModal } from "@/schared/ui-modal";
import { Button } from "@/schared/ui/button";
import React from "react";




export default function Home() {

  const [isOpen, setOpen] = React.useState(false);
  
  function handleClick()
   { setOpen(true)}


  return (
   // <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="bg-slate-50 min-h-screen">
      
        
      <Header handleClick={handleClick}/>
      <UiModal
      width="md"
      isOpen={isOpen}
      onClose={() => setOpen(false)}
    >
        <UiModal.Header>Игра завершена!</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">КУЕ</span>
        </div>
        
      </UiModal.Body>
      <UiModal.Footer>
        <Button size="md" variant="outline">
          Вернуться
        </Button>
        <Button size="md" variant="primary">
          Играть снова
        </Button>
      </UiModal.Footer>


    </UiModal>
     </div>
     
     //<Button>Click me</Button>
    //</main>
  );
}



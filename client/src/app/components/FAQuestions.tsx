import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FAQuestions = () => {

  const faqList = [{
    id:1,
    question:"What tools and libraries used?",
    answer:"Build in Next.js with Shadcn and tailwind as component library, hosted on vercel"
  },{
    id:2,
    question:"Github link",
    answer:""
  },{
    id:3,
    question:"Developed by",
    answer:"Saumitra Pandey"
  }]
  return (
    <>
    {
        faqList.map(item=> 
            (<Accordion type="single" collapsible key={item.id}>
                <AccordionItem value={`op-${item.id}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>
                    {item.answer}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>)
            )
    }
    </>
  )
}

export default FAQuestions
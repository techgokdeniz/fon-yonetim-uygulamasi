import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqQuestions from "@/mocks/faqQuestions";

const FaqSection = () => {
  return FaqQuestions.map((question) => (
    <Accordion key={question.id} id={question.id} type="single" collapsible>
      <AccordionItem value={question.id}>
        <AccordionTrigger>
          <h1 className="text-xl font-semibold">{question.question}</h1>
        </AccordionTrigger>
        <AccordionContent>
          <p>{question.answer}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ));
};

export default FaqSection;

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@components/ui/accordion';

const Home = () => {
  return (
    <div>
      <h3>Basically you need to solve eveything</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Home;

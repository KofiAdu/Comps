import Accordion from "../components/Accordion";
function AccordionPage() {
  //creating a list to populate the dropdown list
  const items = [
    {
      id: 1,
      label: "Augustus",
      content: "First Emperor of Rome",
    },
    {
      id: 2,
      label: "Tiberius",
      content: "Second Emperor of Rome",
    },
    {
      id: 3,
      label: "Caligula",
      content: "Third Emperor of Rome",
    },
    {
      id: 4,
      label: "Claudius",
      content: "Fourth Emperor of Rome",
    },
    {
      id: 5,
      label: "Nero",
      content: "Fifth Emperor of Rome",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;

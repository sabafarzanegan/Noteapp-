import { Button } from "./components/ui/Button";

function App() {
  return (
    <>
      <h1 className="font-casabella"> 12345سلام</h1>
      <Button
        outlet="primary"
        className="ml-4 font-vazir  border-2 duration-100">
        ارسال
      </Button>
    </>
  );
}

export default App;

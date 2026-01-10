import { useState } from "react";
import { Header } from "./components/Header";
import { StageArea } from "./components/StageArea";
import { RealTimeBanner } from "./components/RealTimeBanner";
import { BillTable } from "./components/BillTable";
import { Footer } from "./components/Footer";
import { PaymentProgressScreen } from "./components/PaymentProgressScreen";
import { BillPayPaymentsScreen } from "./components/BillPayPaymentsScreen";

type ViewState = "dashboard" | "progress" | "results";

export default function App() {
  const [view, setView] = useState<ViewState>("dashboard");

  if (view === "progress") {
    return (
      <PaymentProgressScreen 
        onComplete={() => setView("results")}
        onClose={() => setView("dashboard")}
      />
    );
  }

  if (view === "results") {
    return (
      <BillPayPaymentsScreen 
        onClose={() => setView("dashboard")}
      />
    );
  }

  return (
    <div className="w-full bg-white min-h-screen relative pb-[100px]">
      <Header />
      <StageArea />
      <RealTimeBanner />
      <BillTable />
      <Footer onScheduleStart={() => setView("progress")} />
    </div>
  );
}

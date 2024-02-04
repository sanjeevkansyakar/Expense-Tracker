import { Card } from "@/components/card";
import Chart from "@/components/chart";
import { DatePickerWithRange } from "@/components/date-picker-range";
import { Transaction } from "@/components/transaction";
import { IndianRupee } from "lucide-react";

export default function Home() {
    return (
        <main className="text-black max-w-[1400px] border border-gray-500 mx-auto rounded-lg m-5 ">
            <div className="p-4 flex gap-4 max-md:flex-col">
                <Card
                    category="Total track"
                    amount="40000.362"
                    className="w-1/2 max-md:w-full"
                >
                    <IndianRupee className="w-4 h-4" />
                </Card>
                <div className="flex flex-col justify-center gap-2 rounded-md p-6 border border-black w-1/2 max-md:w-full shadow-lg">
                    <h2 className="font-medium tracking-tighter">
                        Date Picker
                    </h2>
                    <DatePickerWithRange />
                </div>
            </div>
            <div className="p-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full">
                <Card category="Income" amount="40000.362">
                    <IndianRupee className="w-4 h-4" />
                </Card>
                <Card category="Saving" amount="200000">
                    <IndianRupee className="w-4 h-4" />
                </Card>
                <Card category="Investment" amount="50000.362">
                    <IndianRupee className="w-4 h-4" />
                </Card>
                <Card category="Expenses" amount="20000.362">
                    <IndianRupee className="w-4 h-4" />
                </Card>
            </div>

            <div className="flex gap-4 m-4">
                <div className="rounded-md border border-black w-1/2 ">
                    <h2 className="pl-4 pt-4 font-semibold">Overview</h2>
                    <div className="flex justify-center items-center">
                        <Chart />
                    </div>
                </div>
                <div className="rounded-md border border-black w-1/2 max-h-[500px] overflow-y-scroll">
                    <h2 className="pl-4 pt-4 font-semibold">
                        Recent Transaction
                    </h2>
                    <div>
                        <Transaction />
                        <Transaction />
                        <Transaction />
                        <Transaction />
                        <Transaction />
                        <Transaction />
                    </div>
                </div>
            </div>
        </main>
    );
}

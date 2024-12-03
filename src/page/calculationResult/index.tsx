import Table from "@/components/calculationResultPage/Table";
import TopText from "@/components/calculationResultPage/TopText";

function CalculationResultPage() {
    return (
        <>
            <TopText />
            <Table title="Потолок" />
            <Table title="Пол" />
            <Table title="Стены" />
            <div className="bg-dark h-[6rem]"></div>
        </>
    );
}

export default CalculationResultPage;
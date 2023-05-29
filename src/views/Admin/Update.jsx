import { UpdateVacancy } from "../../components/Admin/UpdateVacancy";
import { DetailVacancyAdmin } from "../Detail/DetailVacancyAdmin";

function Update() {
    return (
        <section className="flex items-start md:px-12 flex-wrap">
        <UpdateVacancy />
        <article className="w-[95%] ml-auto mr-auto md:w-2/4 lg:w-2/5">
            <DetailVacancyAdmin />
        </article>
    </section>
    )
}

export {Update}
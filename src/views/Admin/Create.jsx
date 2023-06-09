import { CreateVacancy } from "../../components/Admin/CreateVacancy";
import { JobsAdmin } from "../../components/Jobs/JobsAdmin";

function Create() {
	return (
		<section className="flex items-start md:px-12 flex-wrap max-w-7xl mx-[auto] mb-8">
			<CreateVacancy />
			<article className="w-[95%] ml-auto mr-auto md:w-2/4 lg:w-2/5">
				<JobsAdmin />
			</article>
		</section>
	);
}

export { Create };

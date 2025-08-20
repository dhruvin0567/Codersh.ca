import BreadCrumb from "../../components/common/Breadcrumb";
import SingleTeamDetails from "../../components/team/SingleTeamDetails";
import SingleTeamSkill from "../../components/team/SingleTeamSkills";

function SingleTeam() {
  return (
    <>
      <BreadCrumb title="Team Details" />
      <SingleTeamDetails />
      <SingleTeamSkill />
    </>
  );
}

export default SingleTeam;

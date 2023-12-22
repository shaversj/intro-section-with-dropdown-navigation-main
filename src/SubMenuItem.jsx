import iconTodo from "./assets/images/icon-todo.svg";
import iconTodo from "./assets/images/icon-todo.svg";
import iconCalendar from "./assets/images/icon-calendar.svg";
import iconReminder from "./assets/images/icon-reminders.svg";
import iconPlanning from "./assets/images/icon-planning.svg";

const SubMenuItem = ({ itemText, image }) => {
  return (
    <>
      <div className={"flex items-center justify-start space-x-4"}>
        <img className={"h-[16px] w-[16px] scale-100"} src={image} alt={""} />
        <a className={" "} href={""}>
          {itemText}
        </a>
      </div>
    </>
  );
};

export default SubMenuItem;

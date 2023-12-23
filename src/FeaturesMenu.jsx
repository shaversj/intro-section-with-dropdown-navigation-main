import iconTodo from "./assets/images/icon-todo.svg";
import iconCalendar from "./assets/images/icon-calendar.svg";
import iconReminder from "./assets/images/icon-reminders.svg";
import iconPlanning from "./assets/images/icon-planning.svg";

const FeaturesMenu = () => {
  return (
    <>
      <div className={"space-y-2 rounded-xl py-5 pl-11 text-[14px] font-medium text-medium-gray drop-shadow-2xl lg:absolute lg:left-[-3rem] lg:top-[2rem] lg:w-[152px] lg:bg-white lg:px-5"}>
        <div className={"flex items-center justify-start space-x-4"}>
          <img className={"h-[16px] w-[16px] scale-100"} src={iconTodo} alt={""} />
          <a className={""} href={""}>
            Todo List
          </a>
        </div>

        <div className={"flex items-center justify-start space-x-4"}>
          <img className={"h-[16px] w-[16px] scale-100"} src={iconCalendar} alt={""} />
          <a className={""} href={""}>
            Calendar
          </a>
        </div>

        <div className={"flex items-center justify-start space-x-4"}>
          <img className={"h-[16px] w-[16px] scale-100"} src={iconReminder} alt={""} />
          <a className={""} href={""}>
            Reminders
          </a>
        </div>

        <div className={"flex items-center justify-start space-x-4"}>
          <img className={"h-[16px] w-[16px] scale-100"} src={iconPlanning} alt={""} />
          <a className={""} href={""}>
            Planning
          </a>
        </div>
      </div>
    </>
  );
};

export default FeaturesMenu;

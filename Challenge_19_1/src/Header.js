import { useEffect } from "react";
function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}
function Header({ time, setTime }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        setTime(formatTime(new Date()));
      }, 1000);

      return () => clearInterval(id);
    },
    [setTime]
  );
  return (
    <>
      <h1>Workout timer</h1>
      <time>For your workout on {time}</time>
    </>
  );
}

export default Header;

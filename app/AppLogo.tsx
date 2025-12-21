const AppLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-block bg-primary p-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="~size-3/5"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.3742 5.9546V2.9242h-9.666a1.2063 1.2063 0 0 1-.8543-.355A1.2141 1.2141 0 0 1 .5 1.7122c0-.3216.1273-.6299.3539-.8572C1.0805.6277 1.3878.5 1.7082.5h8.4577v2.4242"
          />
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M.5 1.7125v8.4848c0 .3215.1273.6298.3539.8571a1.206 1.206 0 0 0 .8543.3551h9.666V8.3792"
          />
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.5617 5.9547c-.3204 0-.6277.1277-.8543.355a1.214 1.214 0 0 0-.3539.8571c0 .3215.1273.6298.3539.8571.2266.2273.534.355.8544.355h2.4164V5.9547H9.5618Z"
          />
        </svg>
      </span>
      <p className="text-primary font-montserrat font-semibold ~text-base/xl">
        Expense Tracker
      </p>
    </div>
  );
};
// ~size-3/5
export default AppLogo;

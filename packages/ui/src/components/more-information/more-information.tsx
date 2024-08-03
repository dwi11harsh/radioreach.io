/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4SXMPe5i06l
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export const MoreInformationReceiverData = () => {
  return (
    <div className="flex items-center justify-center mt-3">
      <div className="grid grid-cols-1 gap-4 ">
        <div className="border border-slate-500 rounded-xl p-4">
          <div>
            <div className="text-lg font-semibold m-1">Location</div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5 text-muted-foreground" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
        <div className="border border-slate-500 rounded-xl p-4">
          <div>
            <div className="text-lg font-semibold m-1">Inhabitants</div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <UsersIcon className="w-5 h-5 text-muted-foreground" />
              <span>873,965</span>
            </div>
          </div>
        </div>
        <div className="border border-slate-500 rounded-xl p-4">
          <div>
            <div className="text-lg font-semibold m-1">
              Time Station Visited
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-muted-foreground" />
              <span>12</span>
            </div>
          </div>
        </div>
        <div className="border border-slate-500 rounded-xl p-4">
          <div>
            <div className="text-lg font-semibold m-1">Total Time Spent</div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <TimerIcon className="w-5 h-5 text-muted-foreground" />
              <span>24 hours</span>
            </div>
          </div>
        </div>
        <div className="border border-slate-500 rounded-xl p-4">
          <div>
            <div className="text-lg font-semibold m-1">
              Average Session Duration
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-muted-foreground" />
              <span>1 hour 15 minutes</span>
            </div>
          </div>
        </div>
        <div className="border border-slate-500 rounded-xl p-4">
          <div>
            <div className="text-lg font-semibold m-1">
              Most Popular Time of Day
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <SunIcon className="w-5 h-5 text-muted-foreground" />
              <span>2:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SunIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function TimerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

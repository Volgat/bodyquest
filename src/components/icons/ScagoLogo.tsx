export const ScagoLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        viewBox="0 0 160 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg" 
        aria-label="SCAGO Logo"
        {...props}
    >
      <text 
          x="0" 
          y="24" 
          fontFamily="Arial, sans-serif"
          fontSize="28" 
          fontWeight="bold" 
          fill="hsl(var(--foreground))"
      >
        S
      </text>
      <path 
          d="M62 16C62 24.8366 54.8366 32 46 32C37.1634 32 30 24.8366 30 16C30 7.16344 37.1634 0 46 0C54.8366 0 62 7.16344 62 16Z"
          fill="hsl(var(--foreground))"
      />
      <path 
          d="M46 3C53.732 3 60 9.26801 60 17C60 24.732 53.732 31 46 31C38.268 31 32 24.732 32 17C32 9.26801 38.268 3 46 3Z"
          fill="white"
      />
      <path 
          d="M56.4854 17C56.4854 22.7831 51.7831 27.4854 46.0001 27.4854C40.217 27.4854 35.5147 22.7831 35.5147 17C35.5147 11.217 40.217 6.51465 46.0001 6.51465C51.7831 6.51465 56.4854 11.217 56.4854 17Z"
          fill="hsl(var(--primary))"
      />
      <path
        d="M48.0288 15.1108C48.0288 15.1108 46.0002 18.6667 46.0002 21.0526C46.0002 23.4386 48.0288 25 48.0288 25C48.0288 25 50.0574 23.4386 50.0574 21.0526C50.0574 18.6667 48.0288 15.1108 48.0288 15.1108Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
      <path
        d="M46.0002 11C46.0002 11 49.3335 14.807 49.3335 17.5439C49.3335 20.2807 46.0002 24 46.0002 24C46.0002 24 42.6668 20.2807 42.6668 17.5439C42.6668 14.807 46.0002 11 46.0002 11Z"
        fill="hsl(var(--primary))"
      />
      <text 
          x="70" 
          y="24" 
          fontFamily="Arial, sans-serif"
          fontSize="28" 
          fontWeight="bold" 
          fill="hsl(var(--foreground))"
      >
        AGO
      </text>
    </svg>
  );
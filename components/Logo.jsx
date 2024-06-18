import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "54px",
          height: "54px",
          fontSize: "24px",
          fontWeight: "bold",
          color: "hsl(var(--primary-foreground))",
          textDecoration: "none",
          borderRadius: "50%",
          backgroundColor: "hsl(var(--primary))",
          textTransform: "uppercase",
          boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        RK
      </span>
    </Link>
  );
};

export default Logo;

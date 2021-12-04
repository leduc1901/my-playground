import type { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";

const TodoList: NextPage = () => {
  return (
    <Link href="/" passHref>
      go back
    </Link>
  );
};

export default TodoList;

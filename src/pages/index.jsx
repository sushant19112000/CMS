"use client";

import { TestHero } from "@/app/components/home/testhero";
import { TestTen } from "@/app/components/home/testten";
import { TestNine } from "@/app/components/home/testnine";
import { TestEight } from "@/app/components/home/testeight";
import { TestSeven } from "@/app/components/home/testseven";
import { TestSix } from "@/app/components/home/testsix";
import { TestFive } from "@/app/components/home/testfive";
import { TestFour } from "@/app/components/home/testfour";
import { TestThree } from "@/app/components/home/testthree";
import { TestTwo } from "@/app/components/home/testtwo";


export default function Home() {
  return (
    <>
    <TestHero />
    <TestTwo />
    <TestThree/>
    <TestFour/>
    <TestFive/>
    <TestSix/>  
    <TestSeven/>
    <TestEight />
    <TestNine />
    <TestTen/>
    </>
  )
}

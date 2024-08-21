"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TourFactory } from "@/components/tour";
import { Feedback } from "@/components/ui/feedback";

const tour = TourFactory([
  "buttonOne",
  "buttonTwo",
  "missingButton",
  "buttonFour",
  "emailInput",
]);

function TourDisplay(props: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  const ctx = tour.useContext();
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>{props.children}</CardContent>
      <CardFooter>
        {ctx.current < ctx.nodes.size ? (
          <div className="flex w-full justify-between">
            <Button variant="outline" onClick={ctx.close}>
              Close
            </Button>
            <div>
              <Button onClick={ctx.previous}>Anterior</Button>
              <Button onClick={ctx.next}>Próximo</Button>
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-end">
            <Button onClick={ctx.previous}>Previous</Button>
            <Button className="bg-lilas" onClick={ctx.close}>
              Finish
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

function TourApplication() {
  const ctx = tour.useContext();
  return (
    <div className="flex h-96 w-full items-center justify-center">
      <div className="bottom-2 left-2 flex gap-2">
        <tour.TourFocus
          name="buttonOne"
          tourRender={
            <TourDisplay title="Teste">
              <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat, sequi aliquid architecto animi nam quaerat debitis veritatis veniam aspernatur eius unde enim similique nobis libero blanditiis recusandae rerum a?</h1>
            </TourDisplay>
          }
        >
          <Button>Teste</Button>
        </tour.TourFocus>
        <tour.TourFocus
          name="buttonFour"
          tourRender={
            <TourDisplay title="Teste 2">
              <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat, sequi aliquid architecto animi nam quaerat debitis veritatis veniam aspernatur eius unde enim similique nobis libero blanditiis recusandae rerum a? 2</h1>
            </TourDisplay>
          }
        >
          <Button>Teste 2</Button>
        </tour.TourFocus>
      </div>
      <div className="ml-2 right-2 top-12 flex gap-2">
        <tour.TourFocus
          name="buttonTwo"
          tourRender={
            <TourDisplay title="Teste 3">
              <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat, sequi aliquid architecto animi nam quaerat debitis veritatis veniam aspernatur eius unde enim similique nobis libero blanditiis recusandae rerum a? 3</h1>
            </TourDisplay>
          }
        >
          <Button>teste 3</Button>
        </tour.TourFocus>
      </div>
      <div>
        <tour.TourFocus
          name="emailInput"
          tourRender={
            <TourDisplay title="Email Input">
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis tempore nihil illo similique ratione labore cumque saepe quos nesciunt, officiis sed quo maiores veritatis non rerum deleniti? Error, delectus!</h1>
            </TourDisplay>
          }
        >
          <Input type="email" placeholder="Email" />
        </tour.TourFocus>
      </div>
      <div className="absolute bottom-2 right-2">
        <Button onClick={ctx.open}>Open Tour</Button>
      </div>
      <Feedback />
    </div>
  );
}

export default function TourDemo() {
  return (
    <tour.TourProvider>
      <TourApplication />
    </tour.TourProvider>
  );
}

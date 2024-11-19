/* eslint-disable @typescript-eslint/no-unsafe-function-type */
"use client";
import React, { ReactNode, useRef } from "react";
import {
  Reorder,
  useDragControls,
  useInView,
  useMotionValue,
} from "motion/react";
import { useRaisedShadow } from "../use-raised-shadow";
import classNames from "classnames";
import { CheckCircle } from "@untitled-ui/icons-react";

interface Card {
  id?: number;
  title?: string | undefined | null;
  description?: string | undefined | null;
  createdAt?: Date;
  updatedAt?: Date;
}

interface CardProps {
  data?: Card | undefined | null;
  children?: ReactNode;
  enabledData: unknown[];
  setEnabledData: Function;
}

const Card: React.FC<CardProps> = ({
  data,
  children,
  enabledData,
  setEnabledData,
}) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const enableBenefit = (id: unknown) => {
    if (enabledData?.includes(id)) {
      const answers = enabledData?.filter(function (answer) {
        return answer !== id;
      });
      setEnabledData(answers);
    } else {
      setEnabledData([...enabledData, id]);
    }
  };

  return (
    <div
      ref={ref}
      className={classNames(children ? "card-full" : "card")}
      style={{
        transform: isInView ? "none" : "translateY(0px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {children ? (
        <>
          <div className="card-header">Opps!</div>
          <div className="card-body">{children}</div>
        </>
      ) : (
        <Reorder.Item
          value={data}
          style={{
            boxShadow,
            y,
          }}
          dragListener={false}
          dragControls={dragControls}
          drag
          as="div"
        >
          <div
            className="card-header"
            onPointerDown={(event) => dragControls.start(event)}
          >
            {data?.title}
          </div>
          <div className="card-body">
            <p>{data?.description}</p>
          </div>
          <button
            className={classNames(
              enabledData.includes(data?.id)
                ? "card-active-button card-button"
                : "card-button"
            )}
            onClick={() => enableBenefit(data?.id)}
          >
            {enabledData.includes(data?.id) ? (
              <>
                Enabled &nbsp;&nbsp; <CheckCircle />
              </>
            ) : (
              "Enable Benefit"
            )}
          </button>
        </Reorder.Item>
      )}
    </div>
  );
};
export default Card;

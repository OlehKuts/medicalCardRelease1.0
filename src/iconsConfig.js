import React from "react";
import "./styles.css";

export const iconsConfig = {
  woman: ({ size, color, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      fill={color}
      width={size}
      {...props}
    >
      <path
        class="cls-1"
        d="M39.53613,74.30414h13.89V66.518a24.45357,24.45357,0,0,1-2.93869-1.80635,21.91825,21.91825,0,0,1-3.31074-3.61267,20.91721,20.91721,0,0,1-4.15727-12.55278v-8.994a40.37779,40.37779,0,0,0,7.78617.74413c9.23123,0,17.21689-3.00341,21.06145-7.36562a17.7989,17.7989,0,0,0,5.41364,4.001,30.60988,30.60988,0,0,0,7.6999,2.58819v9.02632A21.06318,21.06318,0,0,1,77.491,64.64155a4.2598,4.2598,0,0,1-.53381.39362L74.6925,66.51259v7.79155H88.47465c.20491,0,.40441-.01079.6147-.027H97.749V36.49481a33.749,33.749,0,0,0-33.749-33.749h-.0001a33.749,33.749,0,0,0-33.749,33.749V74.27718h8.65967C39.12094,74.29335,39.33123,74.30414,39.53613,74.30414Z"
      />
      <path
        class="cls-1"
        d="M122.04741,122.355c-1.032-5.70592-3.2806-17.98907-3.79861-19.539-2.90314-8.68535-10.669-12.27113-18.58736-15.34293Q93.57809,85.106,87.47863,82.74691c-.07226-.02408-.14053-.05219-.21281-.0803-.02408-.008-.05219-.02007-.07629-.02809l-13.275,2.01974-.22486,1.20462A13.39769,13.39769,0,0,1,72.465,89.20775a25.8707,25.8707,0,0,1-2.50566,3.92707,36.60348,36.60348,0,0,1-3.29261,3.75442,35.67558,35.67558,0,0,1-2.66626,2.40925,34.89122,34.89122,0,0,1-2.66626-2.40925,37.1449,37.1449,0,0,1-3.29664-3.75442,26.32983,26.32983,0,0,1-2.50564-3.9311,13.29252,13.29252,0,0,1-1.22067-3.34083l-.22889-1.20462L40.82748,82.63853c-.0321.008-.06422.02408-.09235.0321-.07226.02811-.14053.05622-.21281.08032q-6.0894,2.36706-12.18279,4.72213c-7.91439,3.0718-15.68021,6.65758-18.58736,15.34293-.518,1.55-2.76665,13.83311-3.79861,19.539a2.45919,2.45919,0,0,0,2.42128,2.89913H119.62609A2.46127,2.46127,0,0,0,122.04741,122.355ZM50.05494,111.50536c-.91151-1.48567-1.75074-3.02761-2.54577-4.66591a51.73874,51.73874,0,0,1-2.69036-6.68968,38.707,38.707,0,0,1-1.62622-7.19163l-.10843-.97575c-.02007-.2088-.02811-.42564-.04014-.63845l-.0241-.51c-.01205-.253-.0241-.50191-.03212-.7549l.02007-1.036V89.011a18.07845,18.07845,0,0,1,.15661-1.92744l.01205-.11242c.012-.13652.03613-.29311.06424-.46177l7.9666,1.21266a18.57055,18.57055,0,0,0,1.24074,3.05572A29.737,29.737,0,0,0,55.283,95.22686a39.96344,39.96344,0,0,0,3.60587,4.1158q1.19255,1.18654,2.41725,2.22453ZM84.98106,90.842l-.0241.50193c-.01205.21684-.02007.42965-.04016.61838l-.10841.97976a38.75572,38.75572,0,0,1-1.62224,7.20366,52.992,52.992,0,0,1-2.69434,6.69371c-.79506,1.6383-1.63426,3.18023-2.54577,4.66591l-11.25119-9.93816q1.22266-1.036,2.41725-2.22453a39.96627,39.96627,0,0,0,3.60587-4.1158,29.87153,29.87153,0,0,0,2.83086-4.44508A18.05931,18.05931,0,0,0,76.78958,87.722l7.96662-1.21266a4.28519,4.28519,0,0,1,.06825.46177l.01205.11645a18.00715,18.00715,0,0,1,.15659,1.92341l.02009,1.06807C85.00514,90.33608,84.99309,90.589,84.98106,90.842Z"
      />
    </svg>
  ),
  man: ({ size, color, ...props }) => (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 122.88 116.22"
      fill={color}
      width={size}
      {...props}
    >
      <g>
        <path d="M41.68,75.91c6.32,13.18,25.49,13.65,31.54,0.08c-1.65-1.67-2.88-3.46-4.09-5.24c-0.2-0.29-0.4-0.58-0.6-0.88 c-2.92,2.32-6.47,3.8-11.09,3.79c-4.98-0.01-8.74-1.92-11.81-4.73c-0.18-0.17-0.37-0.34-0.55-0.51c-0.44,1.22-1,2.69-1.6,4.06 C42.9,73.78,42.28,75.02,41.68,75.91L41.68,75.91L41.68,75.91z M84.73,93.6l4.54-4.76l6.55,6.3l10.2-13.59l5.07,4.09 c-2.39,2.96-10.91,14.65-12.77,16.17c-1.53,1.25-3.73,1.25-5.15-0.12L84.73,93.6L84.73,93.6z M97.97,66.4 c6.88,0,13.1,2.79,17.61,7.3c4.51,4.51,7.29,10.73,7.29,17.61c0,6.88-2.79,13.1-7.29,17.61c-4.51,4.51-10.73,7.3-17.61,7.3 c-6.88,0-13.1-2.79-17.61-7.3c-4.51-4.51-7.3-10.73-7.3-17.61c0-4.98,1.46-9.62,3.98-13.51c-0.72-0.31-1.43-0.67-2.2-1.1 c-3.06,14.18-27.23,17.6-34.69,0.81c-5.27,2.65-10.62,4.66-16.74,5.61l3.56,25.69H5.76c-10.52-0.8-4.03-16-0.86-20.19 c1.52-2.01,3.41-3.49,5.5-4.66c6.28-3.5,22.63-4.66,29.41-9.39c0.5-0.75,1.04-1.84,1.55-3.02c0.78-1.78,1.49-3.72,1.94-5.04 c-1.9-2.23-3.52-4.75-5.08-7.24l-5.14-8.17c-1.88-2.8-2.86-5.37-2.92-7.47c-0.03-0.99,0.14-1.89,0.5-2.68 c0.38-0.83,0.97-1.52,1.77-2.05c0.37-0.25,0.79-0.46,1.25-0.64c-0.33-4.43-0.46-10.02-0.24-14.7c0.11-1.11,0.32-2.22,0.63-3.33 c1.31-4.69,4.61-8.47,8.68-11.07c2.25-1.43,4.71-2.51,7.28-3.24c1.63-0.46-1.39-5.68,0.3-5.85C58.49-0.77,71.7,6.68,77.4,12.84 c2.85,3.09,4.64,7.18,5.03,12.6l-0.32,13.34v0c1.43,0.43,2.34,1.34,2.71,2.8c0.41,1.62-0.04,3.91-1.41,7.02l0,0 c-0.02,0.06-0.05,0.11-0.09,0.17l-5.86,9.65c-2.15,3.54-4.34,7.1-7.19,9.9c0.26,0.37,0.51,0.74,0.77,1.12 c1.16,1.7,2.33,3.4,3.83,4.92c0.05,0.05,0.09,0.1,0.13,0.16c0.89,0.63,1.96,1.2,3.15,1.72c0.68-0.89,1.42-1.74,2.21-2.53 C84.87,69.19,91.1,66.4,97.97,66.4L97.97,66.4L97.97,66.4z M36.64,40.62c-1.14,0.04-2,0.28-2.59,0.68 c-0.34,0.23-0.58,0.51-0.74,0.86c-0.18,0.38-0.26,0.84-0.24,1.38c0.04,1.56,0.86,3.61,2.45,5.96l0.02,0.03l5.14,8.17 c2.06,3.28,4.22,6.62,6.91,9.07c2.58,2.36,5.72,3.96,9.86,3.97c4.49,0.01,7.77-1.65,10.43-4.14c2.77-2.59,4.95-6.15,7.11-9.69 l5.79-9.54c1.08-2.46,1.47-4.11,1.23-5.08c-0.15-0.58-0.78-0.86-1.86-0.91c-0.23-0.01-0.47-0.01-0.7-0.01 c-0.26,0.01-0.53,0.03-0.81,0.05c-0.15,0.01-0.3,0-0.45-0.03c-0.52,0.03-1.05-0.01-1.59-0.09l1.98-8.78 c-14.71,2.32-25.72-8.61-41.27-2.19l1.12,10.34C37.79,40.73,37.19,40.71,36.64,40.62L36.64,40.62L36.64,40.62L36.64,40.62z M97.97,70.26c-5.81,0-11.08,2.36-14.89,6.17c-3.81,3.81-6.17,9.07-6.17,14.89c0,11.63,9.43,21.05,21.06,21.05 c5.81,0,11.08-2.36,14.89-6.17c3.81-3.81,6.17-9.07,6.17-14.89C119.03,79.68,109.6,70.26,97.97,70.26L97.97,70.26z" />
      </g>
    </svg>
  ),
  logo: ({ size, color, ...props }) => (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill={color}
      {...props}
    >
      <g>
        <path d="m322.967 182.394c-5.857-5.857-15.355-5.857-21.213 0-5.857 5.857-5.857 15.355 0 21.213l21.213 21.213c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.465 10.606-4.394l42.426-42.426c5.858-5.857 5.858-15.355 0-21.213-5.857-5.859-15.354-5.857-21.213 0l-31.818 31.819z" />
        <path d="m365.394 237.181-31.82 31.819-10.607-10.606c-5.857-5.857-15.355-5.857-21.213 0-5.857 5.857-5.857 15.355 0 21.213l21.213 21.213c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.465 10.606-4.394l42.426-42.426c5.858-5.857 5.858-15.355 0-21.213-5.856-5.86-15.353-5.858-21.211 0z" />
        <path d="m256 178h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
        <path d="m256 254h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
        <path d="m256 330h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
        <path d="m256 406h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
        <path d="m436 60h-85.305c-5.653-11.992-17.776-20-31.637-20h-13.846l5.341-21.362c1.12-4.48.113-9.229-2.729-12.869-2.844-3.641-7.205-5.769-11.824-5.769h-80c-4.619 0-8.98 2.128-11.823 5.769-2.842 3.641-3.849 8.389-2.729 12.869l5.341 21.362h-13.846c-13.86 0-25.984 8.008-31.637 20h-85.306c-8.284 0-15 6.716-15 15v422c0 8.284 6.716 15 15 15h360c8.284 0 15-6.716 15-15v-422c0-8.284-6.716-15-15-15zm-243.058 10h33.058c4.619 0 8.98-2.128 11.823-5.769 2.842-3.641 3.849-8.389 2.729-12.869l-5.341-21.362h41.577l-5.341 21.362c-1.12 4.48-.113 9.229 2.729 12.869 2.844 3.641 7.205 5.769 11.824 5.769h33.058c2.454 0 4.528 1.757 4.932 4.178l4.303 25.822h-144.586l4.304-25.822c.403-2.421 2.477-4.178 4.931-4.178zm228.058 412h-330v-392h63.96l-3.756 22.534c-.725 4.349.5 8.797 3.351 12.161s7.036 5.305 11.445 5.305h180c4.409 0 8.595-1.94 11.445-5.305s4.076-7.813 3.351-12.161l-3.756-22.534h63.96z" />
      </g>
    </svg>
  ),
  remove: ({ size, color, ...props }) => (
    <svg
      enableBackground="new 0 0 32 32"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill={color}
      {...props}
    >
      <path d="M20.377,16.519l6.567-6.566c0.962-0.963,0.962-2.539,0-3.502l-0.876-0.875c-0.963-0.964-2.539-0.964-3.501,0  L16,12.142L9.433,5.575c-0.962-0.963-2.538-0.963-3.501,0L5.056,6.45c-0.962,0.963-0.962,2.539,0,3.502l6.566,6.566l-6.566,6.567  c-0.962,0.963-0.962,2.538,0,3.501l0.876,0.876c0.963,0.963,2.539,0.963,3.501,0L16,20.896l6.567,6.566  c0.962,0.963,2.538,0.963,3.501,0l0.876-0.876c0.962-0.963,0.962-2.538,0-3.501L20.377,16.519z" />
    </svg>
  ),
  ava: ({ size, color, ...props }) => (
    <svg
      width={size}
      fill={color}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect fill="none" height="50" width="50" />
      <circle
        cx="25"
        cy="24"
        fill="none"
        r="12"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle
        cx="25"
        cy="24"
        fill="none"
        r="8"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M47,10H37  c-1.469,0-2.484-4-4-4H17c-1.516,0-2.531,4-4,4H3c-1.104,0-2,0.896-2,2v27c0,1.104,0.896,2,2,2h44c1.104,0,2-0.896,2-2V12  C49,10.896,48.104,10,47,10z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path d="M9,14c0,0-0.826,0-1,0c-1.104,0-2,0.896-2,2s0.896,2,2,2c0.174,0,0.826,0,1,0c1.104,0,2-0.896,2-2S10.104,14,9,14z" />
    </svg>
  ),
  tools: ({ size, color, ...props }) => (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 48.5 79"
      {...props}
    >
      <g>
        <path
          fill={color}
          d="M46.7,11.8c0-3.9-1.8-7.4-4.7-9.7c-0.4-0.3-1,0-1,0.5V11l-6.2,3.8L28.5,11V2.7c0-0.5-0.6-0.8-1-0.5
		c-2.8,2.2-4.7,5.5-4.7,9.4c-0.1,5,2.9,9.3,7.2,11.2v33.9c-4.2,1.8-7.2,6-7.2,10.9c0,3.9,1.8,7.4,4.7,9.7c0.4,0.3,1,0,1-0.5v-8.3
		l6.2-3.8l6.2,3.8v8.3c0,0.5,0.6,0.8,1,0.5c2.8-2.2,4.7-5.5,4.7-9.4c0.1-5-2.9-9.3-7.2-11.2V22.6C43.7,20.8,46.7,16.7,46.7,11.8z"
        />
        <path
          fill={color}
          d="M15.5,36.8h-3.7V14.5l1.6-2.6l-2-9.9h-4l-2,9.9l1.6,2.6v22.3H3.3c-0.5,0-0.9,0.5-0.9,1v1.8
		c0,0.6,0.4,1,0.9,1h0.2c-0.7,1.2-1.1,2.7-1.1,4.3V70c0,4.2,3,7.7,6.7,7.7h0.5c3.7,0,6.7-3.4,6.7-7.7V44.9c0-1.6-0.4-3-1.1-4.3h0.2
		c0.5,0,0.9-0.5,0.9-1v-1.8C16.4,37.2,16,36.8,15.5,36.8z M5.7,72.5H4.2V44.9h1.5V72.5z M10.1,72.5H8.6V44.9h1.5V72.5z M14.4,72.5
		h-1.5V44.9h1.5V72.5z"
        />
      </g>
    </svg>
  ),
  view: ({ size, color, ...props }) => (
    <svg
      width={size}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="icon-22-eye" fill={color}>
          <path
            d="M17,9 C8,9 4,16 4,16 C4,16 8,23.000001 17,23 C26,22.999999 30,16 30,16 C30,16 26,9 17,9 L17,9 Z M17,20 C19.2091391,20 21,18.2091391 21,16 C21,13.7908609 19.2091391,12 17,12 C14.7908609,12 13,13.7908609 13,16 C13,18.2091391 14.7908609,20 17,20 L17,20 Z M17,19 C18.6568543,19 20,17.6568543 20,16 C20,14.3431457 18.6568543,13 17,13 C15.3431457,13 14,14.3431457 14,16 C14,17.6568543 15.3431457,19 17,19 L17,19 Z M17,17 C17.5522848,17 18,16.5522848 18,16 C18,15.4477152 17.5522848,15 17,15 C16.4477152,15 16,15.4477152 16,16 C16,16.5522848 16.4477152,17 17,17 L17,17 Z"
            id="eye"
          />
        </g>
      </g>
    </svg>
  ),
  operation: ({ size, color }) => (
    <svg
      width={size}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 510.425 510.425"
    >
      {" "}
      <g>
        <g fill={color}>
          <path
            d="M397.525,319.1c-16.7-16.6-43.6-16.6-60.3,0c-6.9,6.9-11.2,15.9-12.3,25.5l-72.3-72.3c-27.8-27.9-65.9-43.1-105.3-42.2
			c1.1-6.6,2.7-13.1,4.8-19.4c1-2.9,0.2-6-1.9-8.2l-76.8-76.8c-3.1-3.1-8.2-3.1-11.3,0c-3.1,3.1-3.1,8.2,0,11.3l73.4,73.4
			c-2,6.9-3.5,13.9-4.5,21c-7.1,1-14.1,2.5-21,4.5l-73.4-73.4c-3.1-3.1-8.2-3.1-11.3,0c-3.1,3.1-3.1,8.2,0,11.3l76.8,76.8
			c2.1,2.1,5.3,2.9,8.2,1.9c6.3-2.1,12.8-3.7,19.4-4.8c-1,39.4,14.3,77.4,42.1,105.3l72.3,72.3c-23.4,2.6-40.3,23.7-37.7,47.1
			c1.1,9.6,5.4,18.6,12.3,25.5c16.7,16.7,43.7,16.7,60.4,0c14.5-14.5,16.6-37.2,5.1-54.2l10.8-10.8c3.1-3.1,3.1-8.2,0-11.3
			c-3.1-3.1-8.2-3.1-11.3,0l-10.3,10.2l-90.2-90.2c-25.4-25-39-59.7-37.5-95.4c35.7-1.4,70.4,12.1,95.6,37.4l90.2,90.2l-10.3,10.3
			c-3.1,3.2-3,8.2,0.2,11.3c3.1,3,8,3,11.1,0l10.8-10.8c19.5,13.2,46,8.2,59.3-11.3C414.125,356.3,412.025,333.6,397.525,319.1z
			 M275.425,467.8c0,14.7-11.9,26.6-26.6,26.6c-14.7,0-26.6-11.9-26.6-26.6c-0.1-14.7,11.8-26.6,26.6-26.6
			C263.525,441.2,275.425,453.1,275.425,467.8z M386.225,368.2c-10.4,10.4-27.3,10.4-37.7,0c-10.4-10.4-10.4-27.3,0-37.7
			c10.4-10.4,27.3-10.4,37.7,0C396.625,340.9,396.625,357.8,386.225,368.2z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M479.025,282.4l-161.6-161.7c-3.1-3.1-8.2-3.1-11.3,0l-2.4,2.4L182.925,2.3c-1.5-1.5-3.5-2.3-5.7-2.3
			c-2.1,0-4.2,0.8-5.7,2.3c-24.2,24.2-24.3,63.5,0,87.8l47.1,47.1c2.5,2.5,6.4,3.1,9.6,1.3c13.1-7.3,29.4-5.8,41,3.8l8.3,6.9
			l-0.9,0.9c-3.1,3.1-3.2,8.2,0,11.3l161.7,161.7c11.2,11.2,29.4,11.3,40.6,0.1l0.1-0.1C490.225,311.8,490.225,293.6,479.025,282.4z
			 M289.025,137.8l-9.5-7.9c-15-12.3-35.5-15.4-53.5-8.1l-43.1-43.1c-15.8-15.8-18-40.7-5.2-59l114.7,114.7L289.025,137.8z
			 M467.725,311.8c-5,5-13,5-18,0c0,0,0,0-0.1-0.1l-156-156l1.3-1.3c0.1-0.1,0.2-0.2,0.2-0.2l14.1-14.2l2.4-2.4l156,156
			C472.725,298.6,472.725,306.8,467.725,311.8z"
          />
        </g>
      </g>
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  ),
  edit: ({ size, color, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      <path d="M20.254,13.5H22.5a1,1,0,0,0,1-1v-1a1,1,0,0,0-1-1H20.253a11.8,11.8,0,0,0-1-2.922L20.839,5.99a1,1,0,0,0,0-1.414L19.424,3.161a1,1,0,0,0-1.414,0L16.42,4.75a11.769,11.769,0,0,0-2.92-1V1.5a1,1,0,0,0-1-1h-1a1,1,0,0,0-1,1V3.748a11.777,11.777,0,0,0-2.921,1L5.989,3.161a1,1,0,0,0-1.414,0L3.16,4.576a1,1,0,0,0,0,1.414L4.75,7.579a11.821,11.821,0,0,0-1,2.921H1.5a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H3.746a11.821,11.821,0,0,0,1,2.921l-1.59,1.59a1,1,0,0,0,0,1.414l1.415,1.414a1,1,0,0,0,1.414,0l1.589-1.589A11.8,11.8,0,0,0,10.5,20.254V22.5a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V20.254a11.8,11.8,0,0,0,2.92-1l1.591,1.589a1,1,0,0,0,1.414,0l1.414-1.414a1,1,0,0,0,0-1.414l-1.589-1.59A11.821,11.821,0,0,0,20.254,13.5Z" />
      <circle cx="12" cy="12" r="4.5" />
    </svg>
  ),
  eye: ({ size, color, ...props }) => (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 511.626 511.626"
    >
      <g>
        <path
          fill={color}
          d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687
		c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818
		c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68
		c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699
		C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554
		c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704
		c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971
		c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999
		c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04
		c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222
		c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362
		s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362
		c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04
		z"
        />
      </g>
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  )
};

// параметри width, height, fill(колір) видалені та будуть передаватися props-ами
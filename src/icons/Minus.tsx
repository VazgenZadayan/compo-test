const Minus = ({ ...props }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask
        id="mask0_1354_2003"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19 13H5C4.448 13 4 12.553 4 12C4 11.447 4.448 11 5 11H19C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13Z"
          fill="#071435"
        />
      </mask>
      <g mask="url(#mask0_1354_2003)">
        <rect width="24" height="24" fill="#071435" />
      </g>
    </svg>
  );
};

export default Minus;

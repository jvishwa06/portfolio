export function VishwaMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 576 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="
            M48 0h96v64H48z
            M0 64h64v64H0z
            M128 64h64v64H128z
            M0 128h192v64H0z
            M0 192h64v64H0z
            M128 192h64v64H128z
            M256 0h192v64H256z
            M256 64h64v64H256z
            M256 128h64v64H256z
            M384 128h64v64H384z
            M256 192h192v64H256z
            M512 0h64v256H512z
          "
      ></path>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 576 256"><path fill="${color}" d="M48 0h96v64H48zM0 64h64v64H0zM128 64h64v64H128zM0 128h192v64H0zM0 192h64v64H0zM128 192h64v64H128zM256 0h192v64H256zM256 64h64v64H256zM256 128h64v64H256zM384 128h64v64H384zM256 192h192v64H256zM512 0h64v256H512z"/></svg>`;
}

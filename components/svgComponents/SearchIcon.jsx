import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SearchIcon = (props) => (
  <Svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.18 12.384c1.67 0 3.206-.635 4.376-1.807a6.186 6.186 0 0 0 1.803-4.385 6.129 6.129 0 0 0-1.803-4.385A6.16 6.16 0 0 0 6.18 0a6.16 6.16 0 0 0-4.376 1.807c-2.405 2.41-2.405 6.36 0 8.803a6.298 6.298 0 0 0 4.376 1.774Zm0-11.112c1.302 0 2.505.502 3.44 1.44a4.815 4.815 0 0 1 1.437 3.447c0 1.305-.501 2.544-1.437 3.447-.935.904-2.138 1.44-3.44 1.44-1.303 0-2.539-.502-3.44-1.44a4.876 4.876 0 0 1 0-6.895c.901-.937 2.137-1.44 3.44-1.44Z"
      fill={props.color}
    />
    <Path
      d="M15.332 16.006a.659.659 0 0 0 .468-.201.648.648 0 0 0 0-.937l-5.211-5.222a.645.645 0 0 0-.936 0 .648.648 0 0 0 0 .937l5.211 5.222c.134.134.3.2.468.2ZM4.042 4.756a.659.659 0 0 0 .467-.2 2.324 2.324 0 0 1 1.637-.67c.635 0 1.202.234 1.637.67a.645.645 0 0 0 .935 0 .648.648 0 0 0 0-.938 3.604 3.604 0 0 0-2.605-1.071 3.66 3.66 0 0 0-2.606 1.071.648.648 0 0 0 0 .937c.2.134.368.201.535.201Z"
      fill={props.color}
    />
  </Svg>
);

export default SearchIcon;
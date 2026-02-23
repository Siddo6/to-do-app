import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import PropTypes from "prop-types";

export function UserProfile(props) {
  const { firstName = "John" } = props;
  return (
    <div className="flex flex-col w-full pt-8 items-center">
      <Avatar className="mb-4">
        <AvatarFallback className="text-3xl font-bold text-white">
          {firstName.slice(0, 1)}
        </AvatarFallback>
      </Avatar>
      <h4 class="uppercase font-['lora']">Hello  {firstName}</h4>
    </div>
  );
}

UserProfile.propTypes = {
  firstName: PropTypes.string,
};

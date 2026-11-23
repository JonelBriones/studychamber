import { Button } from "./Buttons";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-10">
      <div>
        <span>Chamber</span>
      </div>
      <div className="flex gap-4">
        <Button>Settings</Button>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

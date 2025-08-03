import UserSignup from "@/components/UserSignup/UserSignup";

export default function Signup() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center gap-5 p-10">
        <UserSignup />
      </div>
    </section>
  );
}

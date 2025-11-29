import Image from "next/image";
export default function CreditCardStack() {
  return (
    <div>
      <Image
        src="/assets/icons/card-stack.svg"
        width={506}
        height={389}
        alt="card stack transaction"
        className="object-cover"
      />
    </div>
  );
}

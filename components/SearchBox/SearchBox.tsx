export default function SearchBox({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Search notes"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

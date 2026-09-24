/**
 * SchemaOrg — injects JSON-LD structured data into the page.
 * Server component. Pass the schema object; it renders as a <script> tag.
 */
export function SchemaOrg({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

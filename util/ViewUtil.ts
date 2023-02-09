export function toText(value: string | null | undefined): string {
    if (value === undefined) return ''
    if (value === null) return ''
    return value
}
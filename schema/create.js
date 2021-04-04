export const positif = {
    "type": "object",
    "properties": {
        "name": {
        "type": "string"
        },
        "job": {
        "type": "string"
        },
        "id": {
        "type": "string"
        },
        "createdAt": {
        "type": "string"
        }
    },
    "additionalProperties": false,
    "required": [
        "name",
        "job",
        "id",
        "createdAt"
    ]
};
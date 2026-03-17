import React, { useEffect, useState } from 'react'
import { StringInputProps, useFormValue, set } from 'sanity'
import { Box, Flex, Stack, Text, Spinner, Badge } from '@sanity/ui'

export function MailchimpTagsInput(props: StringInputProps) {
  const { onChange, value = '', elementProps } = props
  const audienceId = useFormValue(['mailchimpAudienceId']) as string | undefined
  const [tags, setTags] = useState<{id: number, name: string}[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!audienceId) {
      setTags([])
      return
    }
    
    setLoading(true)
    const nextUrl = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'
    
    fetch(`${nextUrl}/api/mailchimp/tags?audienceId=${audienceId}`)
      .then(res => res.json())
      .then(data => {
        if (data.tags) setTags(data.tags)
      })
      .catch(err => console.error("Failed to fetch tags", err))
      .finally(() => setLoading(false))
  }, [audienceId])

  const handleTagClick = (tagName: string) => {
      onChange(set(tagName))
  }

  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      
      {audienceId && (
        <Box>
          <Text size={1} weight="medium" muted style={{ marginBottom: '8px', display: 'block' }}>Suggested Tags from Mailchimp API:</Text>
          {loading ? (
             <Spinner muted />
          ) : tags.length > 0 ? (
            <Flex wrap="wrap" gap={2} style={{ marginTop: '8px' }}>
              {tags.map(tag => (
                <div key={tag.id} onClick={() => handleTagClick(tag.name)} style={{ cursor: 'pointer' }}>
                    <Badge
                    mode="outline"
                    tone={value === tag.name ? "primary" : "default"}
                    >
                    {tag.name}
                    </Badge>
                </div>
              ))}
            </Flex>
          ) : (
             <Text size={1} muted>No tags found for this audience. Make sure the Audience ID is correct and tags exist in Mailchimp.</Text>
          )}
        </Box>
      )}
    </Stack>
  )
}

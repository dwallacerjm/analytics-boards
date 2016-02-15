WITH zendesk_requesters AS (
SELECT
  COUNT(DISTINCT a.requester_id) AS NumRequesters,
  DATE_TRUNC('month',CAST(a.created_at as timestamp)) AS Date
FROM zendesk.tickets a
GROUP BY 2
),

help_center_content_visitors AS (
SELECT
  COUNT(DISTINCT domain_userid) AS NumVisitors,
  DATE_TRUNC('month',CAST(collector_tstamp as timestamp)) AS Date
FROM atomic.events
WHERE app_id = 'help_center'
AND event = 'page_view'
AND page_title NOT IN ('RJMetrics Help Center','RJMetrics CloudBI Help Center','RJMetrics Pipeline Help Center')
GROUP BY 2
),

Dates AS (
SELECT 
  DATE_TRUNC('month',date) AS date
FROM public.dates_view
GROUP BY 1
)

SELECT
  COALESCE(a.NumRequesters,0) AS NumRequesters,
  COALESCE(c.NumVisitors,0) AS NumVisitors,
  CASE
    WHEN COALESCE(a.NumRequesters,0) = 0 THEN COALESCE(c.NumVisitors,0)
    ELSE ROUND(COALESCE(c.NumVisitors,0)/CAST(COALESCE(a.NumRequesters,0) as decimal),2)
  END AS SelfServiceScore,
  4.1 AS benchmark,
  b.date
FROM zendesk_requesters a
RIGHT JOIN Dates b
ON a.date = b.date
LEFT JOIN help_center_content_visitors c
ON b.date = c.date
WHERE b.date <= CURRENT_DATE
ORDER BY date
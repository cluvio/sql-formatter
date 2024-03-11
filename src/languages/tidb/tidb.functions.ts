export const functions: string[] = [
  // https://docs.pingcap.com/tidb/stable/sql-statement-show-builtins
  // https://docs.pingcap.com/tidb/stable/functions-and-operators-overview
  'ABS',
  'ACOS',
  'ADDDATE',
  'ADDTIME',
  'AES_DECRYPT',
  'AES_ENCRYPT',
  // 'AND',
  'ANY_VALUE',
  'ASCII',
  'ASIN',
  'ATAN',
  'ATAN2',
  'BENCHMARK',
  'BIN',
  'BIN_TO_UUID',
  'BIT_COUNT',
  'BIT_LENGTH',
  'BITAND',
  'BITNEG',
  'BITOR',
  'BITXOR',
  'CASE',
  'CEIL',
  'CEILING',
  'CHAR_FUNC',
  'CHAR_LENGTH',
  'CHARACTER_LENGTH',
  'CHARSET',
  'COALESCE',
  'COERCIBILITY',
  'COLLATION',
  'COMPRESS',
  'CONCAT',
  'CONCAT_WS',
  'CONNECTION_ID',
  'CONV',
  'CONVERT',
  'CONVERT_TZ',
  'COS',
  'COT',
  'CRC32',
  'CURDATE',
  'CURRENT_DATE',
  'CURRENT_RESOURCE_GROUP',
  'CURRENT_ROLE',
  'CURRENT_TIME',
  'CURRENT_TIMESTAMP',
  'CURRENT_USER',
  'CURTIME',
  'DATABASE',
  'DATE',
  'DATE_ADD',
  'DATE_FORMAT',
  'DATE_SUB',
  'DATEDIFF',
  'DAY',
  'DAYNAME',
  'DAYOFMONTH',
  'DAYOFWEEK',
  'DAYOFYEAR',
  'DECODE',
  'DEFAULT_FUNC',
  'DEGREES',
  'DES_DECRYPT',
  'DES_ENCRYPT',
  'DIV',
  'ELT',
  'ENCODE',
  'ENCRYPT',
  'EQ',
  'EXP',
  'EXPORT_SET',
  'EXTRACT',
  'FIELD',
  'FIND_IN_SET',
  'FLOOR',
  'FORMAT',
  'FORMAT_BYTES',
  'FORMAT_NANO_TIME',
  'FOUND_ROWS',
  'FROM_BASE64',
  'FROM_DAYS',
  'FROM_UNIXTIME',
  'GE',
  'GET_FORMAT',
  'GET_LOCK',
  'GETPARAM',
  'GREATEST',
  'GROUPING',
  'GT',
  'HEX',
  'HOUR',
  'IF',
  'IFNULL',
  'ILIKE',
  // 'IN',
  'INET6_ATON',
  'INET6_NTOA',
  'INET_ATON',
  'INET_NTOA',
  'INSERT_FUNC',
  'INSTR',
  'INTDIV',
  'INTERVAL',
  'IS_FREE_LOCK',
  'IS_IPV4',
  'IS_IPV4_COMPAT',
  'IS_IPV4_MAPPED',
  'IS_IPV6',
  'IS_USED_LOCK',
  'IS_UUID',
  'ISFALSE',
  'ISNULL',
  'ISTRUE',
  'JSON_ARRAY',
  'JSON_ARRAY_APPEND',
  'JSON_ARRAY_INSERT',
  'JSON_CONTAINS',
  'JSON_CONTAINS_PATH',
  'JSON_DEPTH',
  'JSON_EXTRACT',
  'JSON_INSERT',
  'JSON_KEYS',
  'JSON_LENGTH',
  'JSON_MEMBEROF',
  'JSON_MERGE',
  'JSON_MERGE_PATCH',
  'JSON_MERGE_PRESERVE',
  'JSON_OBJECT',
  'JSON_OVERLAPS',
  'JSON_PRETTY',
  'JSON_QUOTE',
  'JSON_REMOVE',
  'JSON_REPLACE',
  'JSON_SEARCH',
  'JSON_SET',
  'JSON_STORAGE_FREE',
  'JSON_STORAGE_SIZE',
  'JSON_TYPE',
  'JSON_UNQUOTE',
  'JSON_VALID',
  'LAST_DAY',
  'LAST_INSERT_ID',
  'LASTVAL',
  'LCASE',
  'LE',
  'LEAST',
  'LEFT',
  'LEFTSHIFT',
  'LENGTH',
  'LIKE',
  'LN',
  'LOAD_FILE',
  'LOCALTIME',
  'LOCALTIMESTAMP',
  'LOCATE',
  'LOG',
  'LOG10',
  'LOG2',
  'LOWER',
  'LPAD',
  'LT',
  'LTRIM',
  'MAKE_SET',
  'MAKEDATE',
  'MAKETIME',
  'MASTER_POS_WAIT',
  'MD5',
  'MICROSECOND',
  'MID',
  'MINUS',
  'MINUTE',
  'MOD',
  'MONTH',
  'MONTHNAME',
  'MUL',
  'NAME_CONST',
  'NE',
  'NEXTVAL',
  'NOT',
  'NOW',
  'NULLEQ',
  'OCT',
  'OCTET_LENGTH',
  'OLD_PASSWORD',
  // 'OR',
  'ORD',
  'PASSWORD_FUNC',
  'PERIOD_ADD',
  'PERIOD_DIFF',
  'PI',
  'PLUS',
  'POSITION',
  'POW',
  'POWER',
  'QUARTER',
  'QUOTE',
  'RADIANS',
  'RAND',
  'RANDOM_BYTES',
  'REGEXP',
  'REGEXP_INSTR',
  'REGEXP_LIKE',
  'REGEXP_REPLACE',
  'REGEXP_SUBSTR',
  'RELEASE_ALL_LOCKS',
  'RELEASE_LOCK',
  'REPEAT',
  'REPLACE',
  'REVERSE',
  'RIGHT',
  'RIGHTSHIFT',
  'ROUND',
  'ROW_COUNT',
  'RPAD',
  'RTRIM',
  'SCHEMA',
  'SEC_TO_TIME',
  'SECOND',
  'SESSION_USER',
  'SETVAL',
  'SETVAR',
  'SHA',
  'SHA1',
  'SHA2',
  'SIGN',
  'SIN',
  'SLEEP',
  'SM3',
  'SPACE',
  'SQRT',
  'STR_TO_DATE',
  'STRCMP',
  'SUBDATE',
  'SUBSTR',
  'SUBSTRING',
  'SUBSTRING_INDEX',
  'SUBTIME',
  'SYSDATE',
  'SYSTEM_USER',
  'TAN',
  'TIDB_BOUNDED_STALENESS',
  'TIDB_CURRENT_TSO',
  'TIDB_DECODE_BINARY_PLAN',
  'TIDB_DECODE_KEY',
  'TIDB_DECODE_PLAN',
  'TIDB_DECODE_SQL_DIGESTS',
  'TIDB_ENCODE_SQL_DIGEST',
  'TIDB_IS_DDL_OWNER',
  'TIDB_PARSE_TSO',
  'TIDB_PARSE_TSO_LOGICAL',
  'TIDB_ROW_CHECKSUM',
  'TIDB_SHARD',
  'TIDB_VERSION',
  'TIME',
  'TIME_FORMAT',
  'TIME_TO_SEC',
  'TIMEDIFF',
  'TIMESTAMP',
  'TIMESTAMPADD',
  'TIMESTAMPDIFF',
  'TO_BASE64',
  'TO_DAYS',
  'TO_SECONDS',
  'TRANSLATE',
  'TRIM',
  'TRUNCATE',
  'UCASE',
  'UNARYMINUS',
  'UNCOMPRESS',
  'UNCOMPRESSED_LENGTH',
  'UNHEX',
  'UNIX_TIMESTAMP',
  'UPPER',
  // 'USER',
  'UTC_DATE',
  'UTC_TIME',
  'UTC_TIMESTAMP',
  'UUID',
  'UUID_SHORT',
  'UUID_TO_BIN',
  'VALIDATE_PASSWORD_STRENGTH',
  'VERSION',
  'VITESS_HASH',
  'WEEK',
  'WEEKDAY',
  'WEEKOFYEAR',
  'WEIGHT_STRING',
  // 'XOR',
  'YEAR',
  'YEARWEEK',
];

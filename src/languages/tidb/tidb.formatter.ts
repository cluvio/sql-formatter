import { DialectOptions } from '../../dialect.js';
import { expandPhrases } from '../../expandPhrases.js';
import { postProcess } from '../mariadb/likeMariaDb.js';
import { dataTypes, keywords } from './tidb.keywords.js';
import { functions } from './tidb.functions.js';

const reservedSelect = expandPhrases(['SELECT [ALL | DISTINCT | DISTINCTROW]']);

const reservedClauses = expandPhrases([
  // queries
  'WITH [RECURSIVE]',
  'FROM',
  'WHERE',
  'GROUP BY',
  'HAVING',
  'WINDOW',
  'PARTITION BY',
  'ORDER BY',
  'LIMIT',
  'OFFSET',
  // Data manipulation
  // - insert:
  'INSERT [LOW_PRIORITY | DELAYED | HIGH_PRIORITY] [IGNORE] [INTO]',
  'REPLACE [LOW_PRIORITY | DELAYED] [INTO]',
  'VALUES',
  'ON DUPLICATE KEY UPDATE',
  // - update:
  'SET',
]);

const standardOnelineClauses = expandPhrases(['CREATE [TEMPORARY] TABLE [IF NOT EXISTS]']);

const tabularOnelineClauses = expandPhrases([
  // - create:
  'CREATE [OR REPLACE] [SQL SECURITY DEFINER | SQL SECURITY INVOKER] VIEW [IF NOT EXISTS]',
  // - update:
  'UPDATE [LOW_PRIORITY] [IGNORE]',
  // - delete:
  'DELETE [LOW_PRIORITY] [QUICK] [IGNORE] FROM',
  // - drop table:
  'DROP [TEMPORARY] TABLE [IF EXISTS]',
  // - alter table:
  'ALTER TABLE',
  'ADD [COLUMN]',
  '{CHANGE | MODIFY} [COLUMN]',
  'DROP [COLUMN]',
  'RENAME [TO | AS]',
  'RENAME COLUMN',
  'ALTER [COLUMN]',
  '{SET | DROP} DEFAULT', // for alter column
  // - truncate:
  'TRUNCATE [TABLE]',
  // https://dev.mysql.com/doc/refman/8.0/en/sql-statements.html
  'ALTER DATABASE',
  'ALTER INSTANCE',
  'ALTER RESOURCE GROUP',
  'ALTER SEQUENCE',
  'ALTER USER',
  'ALTER VIEW',
  'ANALYZE TABLE',
  'CHECK TABLE',
  'CHECKSUM TABLE',
  'COMMIT',
  'CREATE DATABASE',
  'CREATE INDEX',
  'CREATE RESOURCE GROUP',
  'CREATE ROLE',
  'CREATE SEQUENCE',
  'CREATE USER',
  'DEALLOCATE PREPARE',
  'DESCRIBE',
  'DROP DATABASE',
  'DROP INDEX',
  'DROP RESOURCE GROUP',
  'DROP ROLE',
  'DROP TABLESPACE',
  'DROP USER',
  'DROP VIEW',
  'EXPLAIN',
  'FLUSH',
  'GRANT',
  'IMPORT TABLE',
  'INSTALL COMPONENT',
  'INSTALL PLUGIN',
  'KILL',
  'LOAD DATA',
  'LOCK INSTANCE FOR BACKUP',
  'LOCK TABLES',
  'OPTIMIZE TABLE',
  'PREPARE',
  'RELEASE SAVEPOINT',
  'RENAME TABLE',
  'RENAME USER',
  'REPAIR TABLE',
  'RESET',
  'REVOKE',
  'ROLLBACK',
  'ROLLBACK TO SAVEPOINT',
  'SAVEPOINT',
  'SET CHARACTER SET',
  'SET DEFAULT ROLE',
  'SET NAMES',
  'SET PASSWORD',
  'SET RESOURCE GROUP',
  'SET ROLE',
  'SET TRANSACTION',
  'SHOW',
  'SHOW BINARY LOGS',
  'SHOW BINLOG EVENTS',
  'SHOW CHARACTER SET',
  'SHOW COLLATION',
  'SHOW COLUMNS',
  'SHOW CREATE DATABASE',
  'SHOW CREATE TABLE',
  'SHOW CREATE USER',
  'SHOW CREATE VIEW',
  'SHOW DATABASES',
  'SHOW ENGINE',
  'SHOW ENGINES',
  'SHOW ERRORS',
  'SHOW EVENTS',
  'SHOW GRANTS',
  'SHOW INDEX',
  'SHOW MASTER STATUS',
  'SHOW OPEN TABLES',
  'SHOW PLUGINS',
  'SHOW PRIVILEGES',
  'SHOW PROCESSLIST',
  'SHOW PROFILE',
  'SHOW PROFILES',
  'SHOW STATUS',
  'SHOW TABLE STATUS',
  'SHOW TABLES',
  'SHOW TRIGGERS',
  'SHOW VARIABLES',
  'SHOW WARNINGS',
  'TABLE',
  'UNINSTALL COMPONENT',
  'UNINSTALL PLUGIN',
  'UNLOCK INSTANCE',
  'UNLOCK TABLES',
  'USE',
]);

const reservedSetOperations = expandPhrases(['UNION [ALL | DISTINCT]']);

const reservedJoins = expandPhrases([
  'JOIN',
  '{LEFT | RIGHT} [OUTER] JOIN',
  '{INNER | CROSS} JOIN',
  'NATURAL [INNER] JOIN',
  'NATURAL {LEFT | RIGHT} [OUTER] JOIN',
  // non-standard joins
  'STRAIGHT_JOIN',
]);

const reservedPhrases = expandPhrases([
  'ON {UPDATE | DELETE} [SET NULL]',
  'CHARACTER SET',
  '{ROWS | RANGE} BETWEEN',
  'IDENTIFIED BY',
]);

// https://dev.mysql.com/doc/refman/8.0/en/
export const tidb: DialectOptions = {
  name: 'tidb',
  tokenizerOptions: {
    reservedSelect,
    reservedClauses: [...reservedClauses, ...standardOnelineClauses, ...tabularOnelineClauses],
    reservedSetOperations,
    reservedJoins,
    reservedPhrases,
    supportsXor: true,
    reservedKeywords: keywords,
    reservedDataTypes: dataTypes,
    reservedFunctionNames: functions,
    // TODO: support _ char set prefixes such as _utf8, _latin1, _binary, _utf8mb4, etc.
    stringTypes: [
      '""-qq-bs',
      { quote: "''-qq-bs", prefixes: ['N'] },
      { quote: "''-raw", prefixes: ['B', 'X'], requirePrefix: true },
    ],
    identTypes: ['``'],
    identChars: { first: '$', rest: '$', allowFirstCharNumber: true },
    variableTypes: [
      { regex: '@@?[A-Za-z0-9_.$]+' },
      { quote: '""-qq-bs', prefixes: ['@'], requirePrefix: true },
      { quote: "''-qq-bs", prefixes: ['@'], requirePrefix: true },
      { quote: '``', prefixes: ['@'], requirePrefix: true },
    ],
    paramTypes: { positional: true },
    lineCommentTypes: ['--', '#'],
    operators: [
      '%',
      ':=',
      '&',
      '|',
      '^',
      '~',
      '<<',
      '>>',
      '<=>',
      '->',
      '->>',
      '&&',
      '||',
      '!',
      '*.*', // Not actually an operator
    ],
    postProcess,
  },
  formatOptions: {
    onelineClauses: [...standardOnelineClauses, ...tabularOnelineClauses],
    tabularOnelineClauses,
  },
};
